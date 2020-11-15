/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req, res) => {
        try {
          let params = req.body;
          const cart = await Cart.create(params).fetch();
          return res.ok({cart});
        } catch (err) {
          console.log(err);
          return res.serverError(err);
        }
    },
    list: async function(req,res){
        try{
            const cartItems = await Cart.find({user_id: req.params.user_id});
            return res.ok({cartItems});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    update: async function(req, res){
        try{
            const cart = await Cart.updateOne({id: req.params.id}).set({quantity: req.body.quantity});
            return res.ok({cart});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    delete: async function(req,res){
        try{
            await Cart.destroy({id: req.params.id});
            return res.ok()
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    clearcart: async function(req,res){
        try{
            await Cart.destroy({user_id: req.body.userId});
            return res.ok()
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
};

