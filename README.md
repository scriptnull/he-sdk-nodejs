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

## API

Input your source program as a string like this 
```javascript 
var source = "using System;class MyClass{static void Main(string[] args) {System.Console.WriteLine(\"Hello World!\\n\");}}";
```
or input the program from a source file by mentioning the file path like this 
```javascript
var filepath = "E:\\E\\temporary files\\MyClass.cs";
```

#### compile(settings , source , callback)
```javascript
he.compile(settings , source , function(err , result){
	console.log(result);
});
```

#### run(settings , source , callback)
```javascript
he.run(settings , source , function(err , result){
	console.log(result);
});
```

#### compileFile(settings , filepath , callback)
```javascript
he.compileFile(settings , filepath , function(err,result){
	console.log(result);
});
```

#### runFile(settings , filepath , callback)
```javascript
he.runFile(settings , filepath , function(err,result){
	console.log(result);
});
```

## Help 
This package lets you compile code belonging to various programming languages via the HackerEarth API. However, If you want to implement your own code compiling server , you may take a look at [compilex](https://www.npmjs.com/package/compilex) 

## Samples
Here are few samples built with this SDK. If you have got one , feel free to add it here and send a pull request or contact me.
- [collab-and-code](https://github.com/mithunkumarnallu/collab-and-code) by [@mithunkumarnallu](https://github.com/mithunkumarnallu) 

## Contributing
Contributions are more than welcomed !
You can 
- Report a Bug
- Write Tests
- Help write the command line package using this SDK 
- Write an Example app and spread the word.

## Disclaimer
The [HackerEarth API v2](https://www.hackerearth.com/docs/api/developers/code/legacy/) is a copyright of HackerEarth Inc. and this is an unofficial SDK that acts as wrapper for accessing the service provided by HackerEarth Inc.

## License
This repository is licensed under the [MIT License](https://github.com/scriptnull/he-sdk-nodejs/blob/master/LICENSE) .
