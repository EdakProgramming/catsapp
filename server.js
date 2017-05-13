var express = require("express");
var routes = require("./controllers/catsController.js");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 3000;

// Point to the controller that will display html on page
var routes = require("./controllers/catsController.js");



app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static("public"));
app.use("/cats", routes);

// Listen on the port selected
app.listen(port);




