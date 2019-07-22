var express = require("express");
var router = express.Router();
var burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAllBurgers(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  router.post("/api/burgers", function(req, res) {
   
    burger.insertBurger([req.body.data.burger_name], function(result) {
      
      res.json({ id: result.insertId });
    });
  });
  router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;

    burger.devourBurger(id, req.body.devoured,function(result) {
     //console.log(result)
     res.json({ changed: result.changedRows })
    });

  }) ;
  router.delete("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    
    burger.digestBurger(id, function(result) {
     //console.log(result)
     
     res.json({ affected: result.affectedRows })
    
    });

  })  

// Export routes for server.js to use.
module.exports = router;