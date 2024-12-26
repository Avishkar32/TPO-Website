//Here we are setting up the server(the software part).
//Server is something that listens for incoming requests and sends back responses
//(The hardware part of the server is the machine on which we are hosting our application)


//import express from 'express'; 
const express = require('express');

//import dotenv from 'dotenv';
const dotenv = require('dotenv');
//this helps load the environment variables from.env file

const {connectDB} = require('./config/db');
//importing the connectDB function

dotenv.config();
//we are calling the config method from dotenv
//the app reads environment variables from .env file and loads the variables into process.env, so you you can access the environment variables from process.env.PORT or process.env.MONGO_URI

const app = express()
//here we are making an instance of express, this instance is an application. This app has a all the need functions inbuild in it, which help us define routes and middleware

const cors = require('cors');

app.use(cors());
//Cors - Cross Origin Resource Sharing
//As our frontend and backend are running on two different ports, cors allows backend to take request from frontend

const bodyParser = require('body-parser');

app.use(bodyParser.json());


const jobroutes = require("./routes/jobRoute")
const studentroutes = require("./routes/studentRoute")
const companyroutes = require("./routes/companyRoute")


connectDB();

app.use(express.json());

app.use('/api/jobs',jobroutes);
app.use('/api/student',studentroutes)
app.use('/api/company',companyroutes)

app.get('/',(req,res)=>{
    res.send('API is running');
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
});
//here we basically start the server on the given port, i.e we start listening to requests on the specified port