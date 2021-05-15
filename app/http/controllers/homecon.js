const Productdata = require('../../models/productdata')
function homecon() {//factory function
    return {
        async index(req, res) {  
            const products = await Productdata.find()
            return res.render('home', {products: products})
        }
    } 
}
module.exports = homecon