# he-sdk-nodejs
Node.js SDK for HackerEarth API.

This SDK helps you to compile your code with the [HackerEarth API v2](https://www.hackerearth.com/docs/api/developers/code/legacy/)

You can implement an online code compiling site in Node.js ( like [Code Table](https://code.hackerearth.com) ) with the help of this SDK.

## Precheck 
Refer to the official [HackerEarth API v2 Guide](https://www.hackerearth.com/docs/api/developers/code/legacy/) for the details on using the API effectively.

## Install 
```bash
npm install he-sdk-nodejs
```

## Require 
```javascript
var he = require('he-sdk-nodejs');
```

## Configure 
Fetch your client secret from the [HackerEarth API Dashboard](http://www.hackerearth.com/api/register/) 
```javascript
var settings = {
    'client_secret': 'type your client secret' ,
    'async': 0 ,
    'lang': 'CSHARP' ,
    'time_limit': 5,
	'memory_limit': 262144
};
```

## Functions

Input your source program like this 
```javascript 
var source = "using System;class MyClass{static void Main(string[] args) {System.Console.WriteLine(\"Hello World!\\n\");}}";
```

### compile(settings , source , callback)
```javascript
he.compile(settings , source , function(err , res){
	console.log(res);
});
```

### run(settings , source , callback)
```javascript
he.run(settings , source , function(err , res){
	console.log(res);
});
```

# Disclaimer
The [HackerEarth API v2](https://www.hackerearth.com/docs/api/developers/code/legacy/) is a copyright of HackerEarth Inc. and this is an unofficial SDK that acts as wrapper for accessing the service provided by HackerEarth Inc.

#License
This repository is licensed under the [MIT License](https://github.com/scriptnull/he-sdk-nodejs/blob/master/LICENSE) .