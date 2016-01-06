#!/usr/bin/env node

 var clArgs = process.argv.slice(2);
 
clArgs.forEach( function(data) {
process.stdout.write(data)
} )
 process.stdout.write('\n')
 

