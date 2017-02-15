var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//connect the model to the server
require('./server/config/mongoose.js');


// invoking the routes.js
var routes_setter = require('./server/config/routes.js');
routes_setter(app);


//tell server to listen on the 8000 route
var server = app.listen(8000, function() {
 console.log("listening on port 8000 for basic mogoose app!");
});
