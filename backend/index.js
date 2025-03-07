const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

// database connection
const connectDB=async()=>{
    try{
        await mongoose.connect()
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}


connectDB()
app.listen(5000, () => {
    console.log('Server is running on port 5000');
    })