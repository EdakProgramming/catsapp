var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
	port: 3306,
	host: "localhost",
	user: "root",
	password: "root",
	database: "cat_db"
});

connection.connect(function(err) {
	// Error handling
	if(err) {
		console.log("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id: " + connection.threadId);

}); // End of connection.connect

module.exports = connection;