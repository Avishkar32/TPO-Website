
const Job = require("../models/jobmodel");
const Student = require("../models/studentmodel")
const Company = require("../models/companymodel")


const mongoose = require('mongoose');
//crud


exports.createJob = async (req, res) =>{
    


    const { companyName } = req.body;
    console.log(companyName);
   
    try 
    {
        const newjob = await Job.create(req.body);
        const company = await Company.findOne({ name: companyName });
        
        if (!company) {
            return res.status(404).json({
                status: 'fail',
                message: 'Company not found'
            });
        }
        company.currentJobOpening.push(newjob._id);
        await company.save();

        res.status(201).json({
            status:'success',
            data:{
                job:newjob,
            }
        });
    }
    catch(err)
    {
        res.status(400).json({
            status:'fail',
            message:err
        });
    };

}

exports.getjobdata = async(req,res)=>{
    try{
        
        const job = await Job.findById(req.params.id);

        
        res.status(200).json({
            status:'success',
            job
        })

    }
    catch(err)
    {
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}



exports.getAllJobs = async (req,res)=>{
    
    
    
    try{
        const jobs = await Job.find();
        res.status(200).json({
            status:'success',
            alljobs:jobs
        })
        
    }
    catch(err)
    {
        res.status(400).json({
            status:'failure',
            message: err.message,
        })
    }
}

exports.updateJob = async(req,res)=>{
    try{
        const updatedJob = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true,upsert:true})
        //new: true, by default mongoose returns the old object instead of the updated one, so we need to set new:true to get the updated object
        //upsert: false, mongo wil do nothing incase it can't find the resourse you are looking for
        //upsert:true, if it is unable to find the resource you want to update, it will create a new one
        
        res.status(200).json({
            status:"success",
            updatedJob
        })

    }

    catch(err)
    {
        res.status(400).json({
            status:"failure",
            message:err.message
        })
    }
}

exports.deleteJob = async(req,res)=>{
    try{
        await Job.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status:"success",
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
}

exports.applyJob= async(req,res)=>{

    try{
        const {jobId,studentId}=req.params;
        
        const job = await Job.findById(jobId);
        const student = await Student.findById(studentId);

        if(!job||!student)
            return res.status(404).json({status:"fail",message:"Job or student not found"});

        job.studentsApplied.push(studentId);
        await job.save();
        
        student.appliedJobs.push({jobId});
        await student.save();

        res.status(200).json({
            status:"success",
        })
        
        
    }
    catch(err)
    {
        res.status(404).json({
            status:"failure",
            message:err.message
        })
    }
}

exports.pushFeedbackform=async(req,res)=>{
    try{
        const{id}=req.params;
        console.log(id);
        jobId=id;

        const job = await Job.findById(jobId).populate('studentsApplied');
        //by populating we are temporarily replacing the refrences with the actual document to which it is refrencing

        if (!job) {
            return res.status(404).json({
              status: 'fail',
              message: 'Job not found'
            });
        }

        const students = job.studentsApplied;
        

        students.forEach(async (student) =>{
            
            await Student.updateOne(
                {
                    _id:student._id,"appliedJobs.jobId":jobId
                },
                {
                    $set:{"appliedJobs.$.feedbackrequired":true}
                }
            )
        })

        res.status(200).json({
            status:"success",

        })
    

    }
    catch(err)
    {
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
}

exports.closeapplications=async(req,res)=>{
    try{
        const {id} = req.params;
        jobId=id;

        const updatedjob = await Job.findByIdAndUpdate(
            jobId,
            {$set:{status:"ongoing"}},
            {new:true}
        )

        if(!updatedjob)
        {
            res.status(400).json(
                {
                    status:"fail",
                    error:err
                }
            )
        }

        res.status(200).json({
            status:"success",
            updatedjob
        })
    }
    catch(err)
    {
        res.status(400).json(
            {
                status:"fail",
                error:err
            }
        )
    }
}

exports.recuritmentdrivecompleted=async(req,res)=>{
    try{
        const {id} = req.params;
        jobId=id;

        const updatedjob = await Job.findByIdAndUpdate(
            jobId,
            {$set:{status:"completed"}},
            {new:true}
        )   ``

        if(!updatedjob)
        {
            res.status(400).json(
                {
                    status:"fail",
                    error:err
                }
            )
        }

        res.status(200).json({
            status:"success",
            updatedjob
        })
    }
    catch(err)
    {
        res.status(400).json(
            {
                status:"fail",
                error:err
            }
        )
    }
}


exports.addFeedback = async (req, res) => {
  try {
    const formData  = req.body; 
    console.log("formData");
    console.log(formData.overview.numQuestions);
    
    
    const id = req.params.id;

    
    
    const jobId = new mongoose.Types.ObjectId(id); 

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Company not found' });
    }

    // Update overview
    if (formData.overview.numQuestions !== null) {
      job.analytics.overview.totalQuestionsResponses.push(formData.overview.numQuestions);
    }
    if (formData.overview.difficulty !== null) {
      const diff = formData.overview.difficulty;
      job.analytics.overview.difficultyResponses.set(
        diff,
        (job.analytics.overview.difficultyResponses.get(diff) || 0) + 1
      );
    }

    // Update detailedBreakdown
    for (const topic in formData.topics) {
      const topicData = formData.topics[topic];
      console.log("topicData");
      console.log(topicData);
      if (topicData.numQuestions !== null )
        {
        
        console.log("topic");
        console.log(topic);
        job.analytics.detailedBreakdown.get(topic).questionsResponses.push(topicData.numQuestions);
    }
      if (topicData.difficulty !== null) {
        const diff = topicData.difficulty;
        job.analytics.detailedBreakdown.get(topic).difficultyResponses.set(
          diff,
          (job.analytics.detailedBreakdown.get(topic).difficultyResponses.get(diff) || 0) + 1
        );
      }
    }

    // Save the updated document
    await job.save();
    res.status(200).json({ message: 'Feedback added successfully', analytics: job.analytics });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding feedback', error: error.message });
  }
};

