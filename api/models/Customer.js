/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name : {
      type: "string",
      required: true,
    },
    gender: {
      type: "string",
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    phoneno: {
      type: 'string',
      required: true
    },
    address: {
      type: "string",
      required: true
    },
    city: {
      type: "string",
      required: true
    },
    state: {
      type: 'string',
      required: true
    },
    zipcode: {
      type: 'string',
      required: true
    },
  },

};

