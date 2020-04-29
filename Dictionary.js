'use strict'

let HashTable=require('./HashTable.js');
let Hashable=require ('./Hash_Able.js');

class Dictionary{
    #dict
    constructor(){
        this.length=0;
        this.table=new HashTable(1000);
    }//constructor

 //putting items in the dictionary in the key-val pairs   
put(k,v){
this.#dict=new Hashable.KeyValueHash(k,v);
if(this.table.contains(this.#dict)){
    let y=this.table.get(this.#dict);
    y.val=v;
    console.log(y);
    this.table.add(y);
   
}
else{
this.table.add(this.#dict);
}
this.length++;
}//put

//retrieving an key-val item when key is send
get(k){
this.#dict=new Hashable.KeyValueHash(k,0);
if(this.table.contains(this.#dict)){
    let y=this.table.get(this.#dict);
    return y.val;
}
else
throw new Error ("Not here");

}//get

//check whether an item is in the dictionary 
contains(x){
    this.#dict=new Hashable.KeyValueHash(x,0);
    return this.table.contains(this.#dict);
}//contains 

//checks the dictionary is empty or not
isEmpty(){
    return this.length===0;
}//isEmpty


}

module.exports=Dictionary;