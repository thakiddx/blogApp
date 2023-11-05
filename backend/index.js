const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//database
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected')
    }
    catch(err){
        console.log(err)
    }
}

dotenv.config();

app.listen(process.env.PORT, () => {
    connectDB()
    console.log('Server is running on port '+process.env.PORT);
});