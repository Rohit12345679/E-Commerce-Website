const Order=require('../../models/orderdata')
function ordercontroller(){
    return {
        async store(req,res){
            try{
            const {phone ,address}=req.body
            if(!phone || !address)
            {
                req.flash('error','all field is required')
                return res.redirect('/cart')
            }
            const orders=new Order({
                customerId:req.user._id,
                items:req.session.cart.items,
                phone:phone,
                address:address
            })
            await orders.save()
            return res.redirect('/')
       }
    catch(error)
       {
           res.status(400).send(error);
       }
    
        }         

    }
}
module.exports=ordercontroller