const mongoose = require('mongoose'); 
const URI ="mongodb+srv://alibey:toufik103@cluster0.koftu.mongodb.net/Relesean?retryWrites=true&w=majority"; 

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI,{
            useNewUrlParser: true ,
            useUnifiedTopology: true 
        }); 
        console.log("Mongodb connected");
    } catch (err) {
        console.error(err.message)
        
    }
}

module.exports = connectDB;