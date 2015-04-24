var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

module.exports.compile = function(settings , source , callback ){
	requestMaker(settings , source , 0 , callback);
}

module.exports.run = function(settings , source , callback){
	requestMaker(settings , source , 1 , callback);
}

module.exports.compileFile = function(settings , filePath , callback){
	fs.readFile(filePath , { encoding : 'utf8'} , function(err,data){
		if(err)
			callback(err , data);
		else
		{
			requestMaker(settings, data, 0, callback);
		}
	});
}

module.exports.runFile = function(settings , filePath , callback){
	fs.readFile(filePath , { encoding : 'utf8'} , function(err,data){
		if(err)
			callback(err , data);
		else
		{
			requestMaker(settings, data, 1, callback);
		}
	});
}

requestMaker = function( post_data , source , mode , callback ){
	  	data = querystring.stringify({
    	'client_secret': post_data.client_secret ,
    	'async': post_data.async ,
    	'source': source,
    	'lang': post_data.lang ,
    	'time_limit': post_data.time_limit ,
		'memory_limit': post_data.memory_limit 
	});
	var options = {
	  hostname: 'api.hackerearth.com',
	  port: 80,
	  path: mode == 0 ? '/code/compile' : '/code/run',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/x-www-form-urlencoded',
	    'Content-Length': data.length
	  }
	};
	var req = http.request(options , function(res){
		res.on('data' , function(chunk){
			callback(null , chunk.toString());
		});
		res.on('error' , function(err){
			callback(err , null );
		});
	});
	req.on('error' , function(err){
		callback(err , null);
	})
	req.write(data);
	req.end();
}
