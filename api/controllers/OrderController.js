/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create : async (req, res)=> {
        try{
            let orders= req.body.items;
            orders.forEach(async order => {
                let quantity = order.quantity;
                let total_price = Number(order.quantity) * Number(order.item.price);
                let ordered = await Order.create({user_id: req.body.userId, quantity, total_price, item: order.item}).fetch();
            });
            return res.ok({});
        }catch(error){
            console.log(error);
            return res.serverError(error);
        }
    },
    list: async (req,res) => {
        try{
            const orders = await Order.find({
                user_id: req.params.user_id
            });
            return res.ok({orders});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },
    cancle: async function(req, res){
        try{
            const order = await Order.updateOne({id: req.params.id}).set({status: 'Canceled'});
            return res.ok({order});
        }catch(err){
            console.log(err);
            return res.serverError(err);
        }
    },

};

