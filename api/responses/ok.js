/**
 * ok.js
 *
 */
module.exports = function ok(data) {
  // Get access to `req` and `res`
  const req = this.req;
  const res = this.res;

  // Get access to `sails`
  const sails = req._sails;

  // Set status code
  res.status(200);

  // If no data was provided, use res.sendStatus().
  if (_.isUndefined(data)) {
    data = {};
  }
  data.status = 200;

  return res.json(data);
};

