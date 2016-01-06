#!/usr/bin/env babel-node

let fs = require('pn/fs')
let path = require('path')
let filename=process.argv[2]
let isRecursive=process.argv[3]

async function ls(filename,isRecursive){
try{
var fullFileName =path.join(__dirname, filename)

 let fileNames = await fs.readdir(fullFileName)
for(let f of fileNames){
	
	let fName=path.join(filename+'/', f)
	let stats= await fs.stat(fName)

	if(stats.isDirectory() &&  isRecursive== '-R'){
	ls(fName,isRecursive)
	}

	console.log(fName)
}

}catch(e){
	console.log(e.stack)
}
}
ls(filename,isRecursive)