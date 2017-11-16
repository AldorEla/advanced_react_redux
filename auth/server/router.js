const Authentication = require('./controllers/authentication');
const passportServices = require('./services/passport');
const passport = require('passport');

// Do not let passport to setup a cookie session as we are using tokens for authentication
// 'jwt' strategy used
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(request, response) {
        response.send({ hi: 'there' });
    });
    app.post('/signin', requireSignin, Authentication.signin);
    app.post('/signup', Authentication.signup);
}