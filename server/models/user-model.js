const mongoose =  require('mongoose')

const userSchema = new userSchema({
    username:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    phone:{
        type:String,
        require: true,
    },
    password:{
        type:String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    }
})

const User = mongoose.model("User", userSchema)

module.exports=User