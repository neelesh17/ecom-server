const passport = require('passport');
LocalStratrgy = require('passport-local').Strategy;
bcrypt = require('bcrypt');

//Serialize the user
passport.serializeUser(function(user, cb){
    cb(null, user.id);
});

//Deserialize User
passport.deserializeUser(function(id, cb){
    User.findOne({id:id}, function(err, user){
        cb(error, user)
    })
});

async function findByEmail(u, fn) {
    try {
      var user = await User.findOne({email: u});
      if(user){
        return fn(null , user);
      }else{
        return fn(null , false);
      }
    } catch (e) {
      throw e;
    }
}

//Local Strategy
passport.use(new LocalStratrgy({
        usernameField: "email",
        passwordField: "password",
    },function(email, password, done) {
        findByEmail(email, function (err, user) {
            if (!user)
              return done(err, false,null);
            bcrypt.compare(password, user.password, function (err, res) {
              if (!res)
                return done(err, false, {
                  message: 'Invalid Password'
                });
              return done(null, user, {
                message: 'Logged In Successfully'
              });
            });
        });
    }
));