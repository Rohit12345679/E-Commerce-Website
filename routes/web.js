const homecon=require('../app/http/controllers/homecon');
const cartcontroller=require('../app/http/controllers/cartcontroller');
const authcontroller=require('../app/http/controllers/authcontroller');
function initRoutes(app) {
    app.get('/', homecon().index)
    app.post('/update', cartcontroller().update)
    //app.get('/registration', authcontroller().registration)
    app.post('/registration', authcontroller().postregistration)
        
}
module.exports=initRoutes;  