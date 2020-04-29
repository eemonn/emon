'use strict'
let Dictionary=require('./Dictionary.js');
let Encode=require('./Encode.js')
let HashTable=require('./HashTable');
let Hashable=require ('./Hash_Able.js');

function main(){
let c=new Encode(process.argv[2]);
c.encode();
}
main();