require('dotenv').config();

var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var sequelize = require('./db.js');

sequelize.sync()
// User.sync(); // sync( {force: true}) WARNING: This will DROP the table!

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
app.use('/api/user', require('./routes/user.js'));
app.use('/api/report', require('./routes/report'));
app.use('/api/login', require('./routes/session'));


http.listen(process.env.PORT || 3000, function () {
    console.log("app is listening on port 3000...");
});

//Need to create a user object and use sequelize to put that user into
//our database.