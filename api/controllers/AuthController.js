/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
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

  customToJSON: () => {
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

  comparePassword: (password, user, cb) => {
    bcrypt.compare(password, user.password, (err, match) => {
      if (err) {
        console.log(err);
        cb(err);
      }
      if (match) {
        return cb(null, true);
      } else {
        return cb(err);
      }
    })
  }
};

