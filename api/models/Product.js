/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: "string",
      required: true,
    },
    image1: {
      type: "string",
      required: true,
    },
    image2: {
      type: "string",
      required: true,
    },
    image3: {
      type: "string",
      required: true,
    },
    price: {
      type: "string",
      required: true,
    },
    company: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    category_id: {
      type: "string",
      required: true,
    },
    sub_category:{
      type: "string",
      required: true,
    }
  },

};

