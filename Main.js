//-----------------------------------------
 // NAME        : S M Rukunujjaman
 // STUDENT NUMBER    : 7839361
 // COURSE        : COMP 2150
 // INSTRUCTOR    : Mike Domaratzki
 // ASSIGNMENT    : assignment #4
 // 
 //
 // REMARKS: Encoding a file into lzw extension
 //
 //
 //-----------------------------------------




'use strict'
let Dictionary=require('./Dictionary.js');
let Encode=require('./Encode.js')
let HashTable=require('./HashTable');
let Hashable=require ('./Hash_Able.js');

function main(){
let c=new Encode(process.argv[2]);//  reading file from command line
c.encode();
}
main();