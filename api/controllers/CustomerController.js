/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async (req, res) => {
      try {
        let params = req.body;
        const customer = await Customer.create(params).fetch();
        return res.ok({customer});
      } catch (err) {
        console.log(err);
        return res.serverError(err);
      }
    },
  
    list: async (req, res) => {
      try {
        const customers = await Customer.find();
        return res.ok(customers);
      } catch (err) {
        console.log(err);
        return res.serverError(err);
      }
    },
  
    detail: async (req, res) => {
      try {
        const institute = await Customer.findOne({
          id: req.params.id
        });
        return res.ok(institute);
      } catch (err) {
        console.log(err);
        return res.serverError(err);
      }
    },
  
  };

