var express = require("express");

var router = express.Router(); // The second Router has to be with a capital R

var cat = require("../models/cat.js");

router.get("/", function(req, res) {
	cat.all(function(data) {
		if(!req.xhr) {
		res.render("cats/index", {cat:data});
		}
		else{
			res.render("partial/cats/all", {cats: data, layout: false});
		}
	});
});

router.post("/", function(req,res) {
	console.log(req.body,name, req,body,sleepy);
	cat.create({
		name: req.body.name,
		sleepy: req.body.sleepy
	}, function(data) {
		res.json(data);
	});
});

router.put("/:id", function(req, res) {
	cat.update(
		{id: req.params.id},
		{sleepy: req.body.sleepy},
		function(data) {
			res.json(data);
		}
	);
});

router.delete("/:id", function(req, res) {
	cat.delete(
		{id: req.params.id},
		function(data) {
			res.end();
		}
	);
});


module.exports = router;








