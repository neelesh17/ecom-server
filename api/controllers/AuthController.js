/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: async (req, res) => {
    try {
      const params = {
        email: req.body.email,
        password: req.body.password
      };
      const user = await User.create(params).fetch();
      // Handle failure condition
      if (user) {
        console.log(user);
        return res.ok({
          user: user,
          token: jwt.issue({
            id: user.id
          })
        });
      }
    } catch (err) {
      console.log(err);
      return res.serverError();
    }
  },

  login: async (req, res) => {
    try {
      let email = req.body.email;
      let password = req.body.password;

      if (!email || !password) {
        return res.json(401, {
          err: 'email and password required'
        });
      }

      const user = await User.findOne({
        email: email
      });
      if (!user) {
        return res.json(401, {
          err: 'invalid email or password'
        });
      }

      User.comparePassword(password, user, async (err, valid) => {
        if (err) {
          console.log(err);
          return res.forbidden();
        }

        if (!valid) {
          return res.forbidden();
        } else {
          const institute = await Institute.findOne({
            email: email
          });
          return res.ok({
            user: user,
            institute,
            token: jwt.issue({
              id: user.id
            })
          });
        }
      });
    } catch (err) {
      console.log(err);
      return res.serverError(err);
    }
  }

};

