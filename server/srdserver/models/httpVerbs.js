var database = require('../database');

function HttpVerb(){
	// Get Function
	this.get = function(id, res){
		
		database.acquire(function(err,con){
			con.query('SELECT * FROM agencies WHERE ID = ' + id, function(err, result) {
	        con.release();
	        res.send(result);
	      	});
    	});
  	};
 }
 module.exports = new HttpVerb();