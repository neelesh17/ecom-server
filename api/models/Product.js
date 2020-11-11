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
    img_src: {
      type: "string",
      required: true,
    },
    sub_category:{
      type: "string",
      required: true,
    }
  },

};

