#!/usr/bin/env babel-node

let fs = require('pn/fs')
let filename=process.argv[2]
let stat=fs.stat(filename)

let fd= fs.openSync(filename,'r+')
async function touch(fd){
  try{
let date=new Date()
console.log(fd)

await fs.futimes(fd, date, date)

}
catch(e){
	console.log(e.stack)
}
} 
touch(fd)

