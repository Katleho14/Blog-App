const express = require('express');
const mongoose = require('mongoose');
const app = express();

// database connection
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://username123:username123@cluster0.5hvdx.mongodb.net/BlogApp?retryWrites=true&w=majority");


    }
    catch(err){
        console.log(err)
    }
}


app.listen(5000, () => {
    console.log('Server is running on port 5000');
    })