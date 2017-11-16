const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;

    if(!email || !password) {
        return response.send({ error: 'You must provide email and password' });
    }

    // See if a user with a given email exists
    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err); }

        // If an user with the given email does exist, return an error
        if (existingUser) {
            return response.status(422).send({ error: 'Email is in use' });
        }

        // If the user with the given email does not exist, create and save the user record
        const user = new User({
            email: email,
            password: password
        });
        user.save(function(err) {
            if (err) { return next(err); }

            // Respond to the request indicating that the user has been created
            response.json({ token: tokenForUser(user) });
        });
    });
}

exports.signin = function(request, response, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token
    response.send({ token: tokenForUser(request.user) });
}