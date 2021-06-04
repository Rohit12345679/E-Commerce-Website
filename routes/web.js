const homecon=require('../app/http/controllers/homecon')
const cartcontroller=require('../app/http/controllers/cartcontroller')
const authcontroller=require('../app/http/controllers/authcontroller')
const ordercontroller=require('../app/http/controllers/ordercontroller')

const guest=require('../app/middleware/guest')
function initRoutes(app) {
    app.get('/', homecon().index)
    app.get('/home',homecon().index)
    app.get('/login',guest,authcontroller().login)
    app.post('/login',authcontroller().postLogin)
    app.get('/registration', guest,authcontroller().registration)
    app.post('/registration', authcontroller().postregistration)
    app.post('/logout',authcontroller().logout)
    app.post('/update', cartcontroller().update)
    app.get('/cart',cartcontroller().index)
    app.post('/update-cart',cartcontroller().update)
    app.get('/order',ordercontroller().store)  
    app.post('/order',ordercontroller().store)

        
}
module.exports=initRoutes;  