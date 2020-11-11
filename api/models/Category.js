/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user_id: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    img_src: {
      type: "string",
      required: true,
    },
  },

};

