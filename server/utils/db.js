const mongoose = require('mongoose')

const URI="mongodb://localhost:27017/mern_admin"

const connectDb= async()=>{
    try {
        await mongoose.connect(URI)
        console.log("DataBase Connected.");
        
    } catch (error) {
        console.log("Database not connected.");
        process.exit(0)
        
    }
}

module.exports=connectDb