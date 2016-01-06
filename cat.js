#!/usr/bin/env babel-node

let fs = require('pn/fs')
let filename=process.argv[2]

async function ls(filename){
   try{

let data = await fs.readFile(filename)
process.stdout.write(data+'\n')

   }
   catch(e){
console.log(e.stack)
}
}
ls(filename)