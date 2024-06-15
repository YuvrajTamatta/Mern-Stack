const User = require('../models/user-model')



const home = async (req, res)=>{
    try {
        res.status(200).send('This is from Controller')
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res)=>{
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body

        const userExits = await User.findOne({email})

        if(userExits){
            return res.status(400).json({msg:"email already exits"})
        }

        const userCreated = await User.create({username, email, phone, password})
        
        res.status(200).json({msg:userCreated})
    } catch (error) {
      res.status(500).send( "Error occured")  
    }
}


module.exports = {home, register}