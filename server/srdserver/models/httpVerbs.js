var database = require('../database');

function HttpVerb(){
	// Get Function
	this.get = function(tablename, res){
		
		database.acquire(function(err,con){
			con.query('SELECT * FROM ' + tablename, function(err, result) {
		        con.release();
		        res.send(result);
	      	});
    	});
  	};
 }
 module.exports = new HttpVerb();