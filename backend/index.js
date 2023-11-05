const express = require('express');
const app = express();

//database
const connectDB = async() => {
    try{
        await mongoose.connnect('mongodb+srv://thakiddx:0920Sonics@cluster2.bmuid82.mongodb.net/blog?retryWrites=true&w=majority')
    }
    catch(err){
        console.log(err)
    }
}

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
});