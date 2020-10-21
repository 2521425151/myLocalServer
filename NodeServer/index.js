const http = require('http');
// const chalk = require('chalk');
const path = require('path');
const config = require('./defaultConfig.js');
const readFile = require('./readFile.js');
 
var server = http.createServer(function(req,res){
	const filePath = path.join(config.root,req.url)
	// console.info("path",`${chalk.green(filePath)}`)
	readFile(req,res,filePath)
});
 
server.listen(config.port,config.hostname,()=>{
	var addr = `http://${config.hostname}:${config.port}`;
	// console.info(`listenning in:${chalk.green(addr)}`);	
	console.info(`listenning in:${addr}`);	
})