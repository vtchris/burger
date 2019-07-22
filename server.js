
var exphbs = require("express-handlebars");
var express = require("express");
var router = require("./controllers/burgers_controller")

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Root get route
app.use(router);
// app.get("/", function (req, res) {

// })

app.listen(PORT, function(){
    console.log(`Listening on port: PORT`);
})