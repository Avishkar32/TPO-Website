
const Student = require('../models/studentmodel');

exports.createStudent = async(req,res)=>{
    console.log(req.body);


    try{

        const newstudent = await Student.create(req.body);

        res.status(200).json({
            status:'success',
            newstudent
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

exports.getStudentdata = async(req,res)=>{
    try{
        
        const student = await Student.findById(req.params.id);

        //console.log(student)
        // req.studentData = student;
        // next();
        res.status(200).json({
            status:'success',
            student
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

exports.getAppliedJobsWithFeedback = async (req,res)=>{

    try{
        
        const student = await Student.findById(req.params.id);

        const jobswithFeedback = student.appliedJobs.filter(job=>job.feedbackrequired);

        res.status(200)
           .json(
            {
                status:"success",
                student,
                jobswithFeedback
            }
        )
        

    }

    catch(err)
    {
        res.status(400)
            .json({
                status:"failed",
                message:err
            })
    }

};