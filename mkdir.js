#!/usr/bin/env babel-node

let fs = require('pn/fs')
let path = require('path')

let fileName=process.argv[2]
let files =fileName.split('/')
let prefix =''

for(let f of files){
if(f!='.'){
mkdir(f,prefix)
prefix+='/'+f
      }
}

async function mkdir(dir,prefix){

var fullDirName =path.join(__dirname, prefix+'/'+dir)

if (!fs.existsSync(fullDirName)){
    fs.mkdirSync(fullDirName);
}

}
