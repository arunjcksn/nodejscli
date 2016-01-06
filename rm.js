#!/usr/bin/env babel-node

let fs = require('pn/fs')
let path = require('path')
let fPath=process.argv[2]



 function removeFiles(filename){
try{

  var fullFileName =path.join(__dirname, filename)
	let isFile=  fs.statSync(fullFileName)

	if(isFile.isFile()){
		fs.unlinkSync(fullFileName)
		console.log('Deleting file::'+fullFileName)
		return
	}

 	let fileNames =  fs.readdirSync(fullFileName)
	for(let f of fileNames){

	let fName=path.join(filename+'/', f)
	let stats=  fs.statSync(fName)

	if(stats.isFile() ){
		fs.unlinkSync(fName)
		console.log('Deleting file::'+fName)
	}else{
		removeFiles(fName)
	}
	
}
	console.log('Deleting Dir ::'+fullFileName)
	
	
	 fs.rmdirSync(fullFileName)

	
	

}catch(e){
	console.log(e.stack)
}
}




removeFiles(fPath)