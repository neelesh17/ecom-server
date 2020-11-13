/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
//Auth Routes
 'POST /locals/v1/auth/register': {
  controller: 'AuthController',
  action: 'register'
},

'POST /locals/v1/auth/login': {
  controller: 'AuthController',
  action: 'login'
},

//Customer Routes
'POST /locals/v1/customer': {
  controller: 'CustomerController',
  action: 'create'
},
'GET /locals/v1/customers': {
  controller: 'CustomerController',
  action: 'list'
},
'GET /locals/v1/customer/:id': {
  controller: 'CustomerController',
  action: 'detail'
},

//Category Routes
'POST /locals/v1/category': {
  controller: 'CategoryController',
  action: 'create'
},
'GET /locals/v1/category': {
  controller: 'CategoryController',
  action: 'list'
},

//Product Route
'POST /locals/v1/product': {
  controller: 'ProductController',
  action: 'create'
},
'GET /locals/v1/products/:category_id': {
  controller: 'ProductController',
  action: 'list'
},
'GET /locals/v1/products/:category_id/:sub_category': {
  controller: 'ProductController',
  action: 'filteredlist'
},
'GET /locals/v1/product/:id': {
  controller: 'ProductController',
  action: 'detail'
},

//Cart Routes
'POST /locals/v1/cart/': {
  controller: 'CartController',
  action: 'create',
},
'POST /locals/v1/cart/:id': {
  controller: 'CartController',
  action: 'update',
},
'GET /locals/v1/cart/:user_id': {
  controller: 'CartController',
  action: 'list'
},
'DELETE /locals/v1/cart/:id':{
  controller: 'CartController',
  action: 'delete',
}
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
