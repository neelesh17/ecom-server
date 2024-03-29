/**
 * Auth.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {
  schema: true,
  attributes: {
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string'
    },

  },

  customToJSON: function(){
    return _.omit(this, ['password'])
  },

  beforeCreate: (values, next) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      bcrypt.hash(values.password, salt, (err, hash) => {
        if (err) {
          console.log(err);
          return next(err);
        }
        values.password = hash;
        return next();
      })
    })
  },

};



