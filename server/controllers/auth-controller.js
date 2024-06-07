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
        res.status(200).json({msg:req.body})
    } catch (error) {
      res.status(500).send( "Error occured")  
    }
}


module.exports = {home, register}