var express = require("express");
var exphbs = require("express-handlebars");
var connection = require('./config/connection');

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Root get route
app.get("/", function (req, res) {

})

app.listen(PORT, function(){
    console.log(`Listening on port: PORT`);
})