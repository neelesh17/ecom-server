/**
 * Module dependencies
 */

// n/a

/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 * return res.forbidden(err, 'some/specific/forbidden/view');
 *
 * e.g.:
 * ```
 * return res.forbidden('Access denied.');
 * ```
 */

module.exports = function forbidden(data) {
  // Get access to `req` and `res`
  const req = this.req;
  const res = this.res;

  // Get access to `sails`
  const sails = req._sails;

  // Set status code
  res.status(403);

  // If no data was provided, use res.sendStatus().
  if (_.isUndefined(data)) {
    data = {};
  }
  data.status = 403;

  return res.json(data);
};
