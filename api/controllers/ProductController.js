/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async (req,res) => {
        try{
            let params = req.body;
            const product = await Product.create(params).fetch();
            return res.ok({product});
        }catch(error){
            console.log(error);
            return res.serverError(error);
        }
    },
    filteredlist: async (req,res) => {
        try{
            const products = await Product.find({
                category_id: req.params.category_id,
                sub_category: req.params.sub_category
            });
            return res.ok({products});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    list: async (req,res) => {
        try{
            const products = await Product.find({
                category_id: req.params.category_id
            });
            return res.ok({products});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    detail: async (req,res) => {
        try{
            const product = await Product.findOne({
                id: req.params.id
            });
            return res.ok({product});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    }

};

