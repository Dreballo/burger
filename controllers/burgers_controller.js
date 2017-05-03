//Initialie express
var express = require('express');

var router = express.Router();

//Import the model (burger.js) to use its database functions
var burger = require('../models/burger.js');


//redirect to '/burgers' from root
router.get('/', function (req, res){
    res.redirect('/burgers')
});

//Creating api routes adn adding logic for routes
router.get('/burgers', function (req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post('/burgers/add', function(req,res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function () {
        res.redirect('/burgers');
    });
});

router.put("/burgers/update/:id", function (req,res){
    var condition = "id = " + req.params.id;

    console.log("condition ", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (data){
        res.redirect('/burgers');
    });
});

// Export routes for server.js to use
module.exports = router;

