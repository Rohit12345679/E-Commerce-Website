const express=require("express")
const app=express()
const ejs=require('ejs')
const path=require('path')
const mongoose=require('mongoose')
var cookieParser = require('cookie-parser')
const session=require('express-session')
const flash=require('express-flash')
const MongoDbStore = require('connect-mongo')(session)
const passport=require('passport');
require('./app/models/productdata') 
require('./app/http/controllers/homecon')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "public/css/style")));
app.set('views',path.join(__dirname,"/resources/views"));
app.set('view engine','ejs');
require('./routes/web')(app);
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));


mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});
app.use(cookieParser())

let mongoStore = new MongoDbStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
});
 
app.use(session({
    secret:'rohitkumar',
    resave:false,
    store: mongoStore,
    saveUninitialized:true,
    cookie:{maxAge:1000*60*60*24}
}))



app.use(flash());
app.get('/', (req,res) =>{
    res.render('home');
});

app.get('/registration', (req,res) =>{
    res.render('registration');
});




app.get('/login', (req,res) =>{
    res.render('login');
});


app.listen(PORT,()=>{  
    console.log(`listening on port ${PORT}`);
})