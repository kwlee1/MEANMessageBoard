// Import express and path modules.
var express = require( "express");
var path = require( "path");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(session({secret: 'twentyone'}));
// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
//routes/index.js handles routing
var route = require('./routes/index.js')(app, server);