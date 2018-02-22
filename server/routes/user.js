var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function (req, res) {
    console.log(req);

    var username = req.body.user.username;
    var pass = req.body.user.password; //TODO: hash this pw
    var email = req.body.user.email;
    var company = req.body.user.company;
    var address = req.body.user.address;
    var license = req.body.user.license;
    var phone = req.body.user.phone;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10),
        email: email,
        company: company,
        address: address,
        license: license,
        phone: phone,
    }).then(
        function createSuccess(user) {
            console.log(user);

            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                user : user,
                message: 'create',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;