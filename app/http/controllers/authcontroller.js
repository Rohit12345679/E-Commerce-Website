const Userdata=require('../../models/userdata')
function authcontroller()
{
    return{ 
    login(req,res) {
        res.render('auth/login');
    },
    registration(req,res) {
        res.render('auth/registration');
    },
   async postregistration(req,res)
    {
        try{
        const {name,email,password}=req.body;
       const user = new Userdata({
        name,
        email,
        password
    })
    const Register =await user.save();
            console.log(Register)
            res.render('login');
       }
    catch(error)
       {
           res.status(400).send(error);
       }
    
}


}
}
module.exports=authcontroller