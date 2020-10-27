/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

const jwt = require('jsonwebtoken');
const tokenSecret = '123455';

module.exports.issue = function (payload) {
  return jwt.sign(
    payload,
    tokenSecret
  );
};

module.exports.verify = function (token, callback) {
  return jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
};
