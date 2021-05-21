const Userdata=require('../../models/userdata')
const bcrypt =require('bcrypt')
const passport = require('passport')
function authcontroller()
{
    return{ 
    login(req,res) {
        res.render('login');
    },
    postLogin(req,res,next){
        const { email, password }   = req.body
        if(!email || !password) {
           req.flash('error', 'All fields are required')
            return res.redirect('/login')
        }
        passport.authenticate('local', (err, user, info) => { 
        if(err){
           req.flash('error',info.message )
            return next(err)
        }
        if(!user)
        {
            req.flash('error', info.message  )
            return res.redirect('login')
        }
        req.logIn(user, (err) => {
        if(err)
            {
               req.flash('error',info.message )
                return next(err) 
            }
            return res.redirect('/')
        })
        })(req, res, next)
    },
    
    registration(req,res) {
        res.render('registration');
    },
   async postregistration(req,res)
    {
        try{
        const {name,email,password}=req.body;
        if(!name || !email|| !password)
        {
            req.flash('error', 'All fields are required')
            req.flash('name', name)
            req.flash('email', email)
            return res.redirect('/registration')

         }
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new Userdata({
        name,
        email,
        password:hashedPassword
       })
         await user.save()
            res.render('login')
       }
    catch(error)
       {
           res.status(400).send(error);
       }
    
},
logout(req,res)
{
    req.logout()
    return res.redirect('/login')
}



}
}
module.exports=authcontroller