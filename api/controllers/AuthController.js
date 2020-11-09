/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');

module.exports = {
  //Login function
  login: async function(req, res){
    try{
       await passport.authenticate('local', async function(err, user, info){
        if(!user){
            return res.unauthorized();
        }
        let customer = await Customer.findOne({
            email: user.email,
        })
        return res.ok({
            token: jwt.issue({
                id: user.id
            }),
            user,
            customer,
        });
      })(req, res);
    }catch (err) {
        console.log(err);
        return res.serverError();
    }
  },

  //Register function
  register: async function(req, res){
    try{
        data = {
            email: req.body.email,
            password: req.body.password,
        }
        const user = await User.create(data).fetch();
        return res.ok({
            user: user,
            token: jwt.issue({
                id: user.id
            })
        });
    } catch (err) {
        console.log(err);
        return res.serverError();
    }
  }

};

