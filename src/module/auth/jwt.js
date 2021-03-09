const { user } = require("../../database/model/index");
const passport = require("passport");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "!_^secret.casl.authorization?!";
opts.issuer = 'CASL.Express';
opts.audience = 'casl.io';


passport.use(
  new JwtStrategy(opts,async function (req, done) {
   const result = await user.findOne({ email: req.user.email });

      if (!result) {
        return done(null, false, { message: "Incorrect username." });
      }
      // if (!user.validPassword(password)) {
      //   return done(null, false, { message: 'Incorrect password.' });
      // }
      return done(null, result);

  })
);

module.exports = passport;
