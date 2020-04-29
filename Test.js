'use strict';
let assert = require('assert');
let HashTable = require('./HashTable');
let Hashable = require('./Hash_Able.js');



function main() {
    test1();//testing if the hashtable is Empty before adding an item;
    test2();//testing after adding a item is the table is empty or not
    test3();//checking and returning an item with get method
    test4();//removing an item
    test5();//checking if a item is there or not with contains method

}

//testing if the hashtable is Empty before adding an item;
function test1() {
    let htable = new HashTable(210);//just initializing the table
    assert.equal(htable.isEmpty(), true);// no item is added so it must be true
    console.log("passed: test1");
}//test1

//testing after adding a item is the table is empty or not
function test2() {
    let htable = new HashTable(210);
    let x = new Hashable.StringHash("foo");
    htable.add(x);
    htable.add(x);
    assert.equal(htable.isEmpty(), false); //added one item so it must be false
    console.log("passed: test2");
}//test2

//checking and returning an item with get method
function test3() {
    let htable = new HashTable(210);
    let item1, item2, item3;
    item1 = new Hashable.IntHash(2);
    item2 = new Hashable.StringHash("foo");
    item3 = new Hashable.StringHash("man");
    htable.add(item1);
    htable.add(item2);
    htable.add(item3);


    let y = htable.get(item1);//getting an item 
    assert.equal(item1, y);//checking the item that returned is y,  same as the item1
    console.log("passed: test3");
}//test3

//removing an item
function test4() {
    let htable = new HashTable(210);
    let item1, item2, item3, item4;
    item1 = new Hashable.IntHash(2);
    item2 = new Hashable.StringHash("foo");
    item3 = new Hashable.StringHash("man");
    item4 = new Hashable.KeyValueHash("corona", 2);
    htable.add(item1);
    htable.add(item2);
    htable.add(item3);
    htable.add(item4);

    let y = htable.remove(item4);
    assert.equal(y, true);//removed item4 "corona " from the table
    console.log("passed: test4");


}//test4


//checking if a item is there or not with contains method
function test5() {
    let htable = new HashTable(210);
    let item1, item2, item3, item4;
    item1 = new Hashable.IntHash(2);
    item2 = new Hashable.StringHash("foo");
    item3 = new Hashable.StringHash("man");
    item4 = new Hashable.KeyValueHash("corona", "virus");
    htable.add(item1);
    htable.add(item2);
    htable.add(item2);


    let y = htable.contains(item4);
    assert.equal(y, false);//table does not contains item4 and return false
    console.log("passed: test5");

}//test5


main();