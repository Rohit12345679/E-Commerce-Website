const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
    customerId:{type:mongoose.Schema.Types.ObjectId,
    ref:'Userdata',
   required:true
},
items:{type:Object},
phone:{type:String},
Address:{type:String},
PaymentType:{type:String},
status:{type:String}
},
 {timestamps:true})
 module.exports=mongoose.model('order',orderSchema)