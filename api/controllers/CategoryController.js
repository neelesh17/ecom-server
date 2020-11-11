/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function(req, res){
        try{
            let params = req.body;
            const category = await Category.create(params).fetch();
            return res.ok(category);
        }catch(error){
            console.log(error);
            return res.serverError(error);
        }
    },

    list: async function(req,res){
        try{
            const categories = await Category.find();
            return res.ok({categories});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
};

