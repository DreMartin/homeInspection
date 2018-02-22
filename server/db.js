var Sequelize = require('sequelize');
var sequelize = new Sequelize('homeinspection', 'postgres', 'pgDB@1150', {
    host:'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('connected to homeinspection postgres db');
    },
    function (err) {
        console.log(err);
    }
);

var User = sequelize.import('./models/user');
var Report = sequelize.import('./models/report.js');

module.exports = sequelize;