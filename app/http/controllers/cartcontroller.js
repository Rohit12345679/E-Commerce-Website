const Productdata = require('../../models/productdata')
function cartcontroller() {//factory function
    return {
        async index(req, res) {  
             res.render('cart')
        },
        update(req,res){
            /*let cart={
                items:{
                    productid:{item:productobject,qty:0},
                },
                totalQty:0,
                totalPrice:
            }*/
        
            if(!req.session.cart){
                req.session.cart={
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
            }
            let cart=req.session.cart
               
                console.log(req.body)
                //check if item does not exist in cart
            
            
            return res.json({product:'all ok'})
        }
    } 
}
module.exports = cartcontroller