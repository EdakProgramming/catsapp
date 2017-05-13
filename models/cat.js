var orm = require("../config/orm.js");

var cat = {
	all:function(callback) {
		orm.all("cats", callback);
	},
	create: function(cat, callback) {
		orm.create("cats", cat, callback);
	},
	update: function(condition, cat, callback) {
		orm.update("cats", condition, cat, callback);
	},
	delete: function(condition, callback) {
		orm.delete("cats", condition, callback);
	}
};

module.exports = cat;