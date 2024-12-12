
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    studentname:{
        type:String
    },
    studentId:{
        type:Number
    },
    email:{
        type:String
    },
    appliedJobs:[
        {
            jobId:{
                type:Schema.Types.ObjectId,
                ref:'Job' //ref to Job model/schema
            },
            feedbackrequired:{
                type:Boolean,
                default:false
            }
        }
    ],



})

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;