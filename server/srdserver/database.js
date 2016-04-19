var mysql = require("mysql");

function Database(){
	this.pool = null;
	//Configuration of mysql
	this.init =function(){
		this.pool = mysql.createPool({
			connectionLimit: 10, // limited to 10
			host: 'localhost',
			user: 'root',
			password: '', // NEED TO FILL IN
			database: 'web_apps'  // NEED TO FILL THAT TOO :)
		});
	};
	// Establish the connection with the database
	this.acquire = function(callback){
		this.pool.getConnection(function(err, connection){
			callback(err, connection);
		});
	};
}
module.exports = new Database();