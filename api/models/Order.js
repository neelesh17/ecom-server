/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id :{
      type: "string",
      required: true
    },
    item: {
      type: 'json',
      required: true,
    },
    // retailer_id: {
    //   type: "string",
    //   required: true
    // },
    quantity: {
      type: "string",
      required: true
    },
    status: {
      type: "string",
      defaultsTo: "Initiated" //"Out for delivery" "Delivered"
    },
    price: {
      type: "string",
      required: true
    }

  },

};

