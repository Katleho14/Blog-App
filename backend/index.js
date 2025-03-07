const express = require('express');
const mongoose = require('mongoose');
const app = express();

// database connection
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://username123:<username123>@cluster0.5hvdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database is connected successfully!")

    }
    catch(err){
        console.log(err)
    }
}


app.listen(5002, () => {
    console.log('Server is running on port 5002');
    })