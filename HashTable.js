'use strict'
let HashAble = require('./Hash_Able.js');
let Hashable = require('./Hash_Able.js');

//Node class required for separate chaining
class Node {
    #data;
    #next;
    constructor(data = null, next = null) {
        this.#data = data;
        this.#next = next;
    }//constructor
    get data() {
        return this.#data;
    }//getter method for data
    set data(x) {
        this.#next = x;
    }
    get next() {
        return this.#next;
    }//getter method for next node

    set next(x) {
        this.#next = x;
    }//setter method

}//Node class


//HashTable class that implements a hashtable with separate chaining
class HashTable {
    #size; //size  of the hashtable
    constructor(size) {
        this.#size = size; //initialCapacity

        this.hashArray = new Array(size);//array to store items

        this.length = 0;
    }//constructor


    get getlength() {
        return this.length;
    }//getlenght method returns table lenght 

    //add method that adds items in the hashtbale
    add(x) {

        let hash = x.hashVal();

        let index = hash % this.#size;

        if (this.hashArray[index] === undefined) {
            this.hashArray[index] = {};
            this.hashArray[index] = new Node(x, null);


            this.length++;
        }
        else {
            let node = this.hashArray[index];

            while (node.next != null && node.data !== (x.key)) {

                node = node.next;
            }
            if (node.data === (x.key)) {
                node.data = x;
                this.length++;
            }
            else {
                node.next = new Node(x, null);
                this.length++;
            }

        }

    }//add 


    //get method that finds an item from the hashtable and returns that item
    get(x) {

        let hash;
        hash = x.hashVal();

        let index = hash % this.#size;
        if (this.hashArray[index] === null)
            return null;
        else {
            let node = this.hashArray[index];
            while (node !== null && !node.data.equals(x.key)) {
                node = node.next;
            }
            if (node === null) {
                throw new Error("no item found");
            }
            else {
                return node.data;
            }
        }

    }//get


    //remove method will remove an desired item from the hashtable and returns the 
    //corresponding true or false . upon removing it decrease the table size by one or else unchanged
    remove(x) {
        let bools = false;
        let hash = x.hashVal();
        let index = hash % this.#size;
        let prev = null;
        let curr = this.hashArray[index];

        if (this.hashArray[index] !== undefined) {
            while (curr !== undefined && curr.data !== (x)) {

                prev = curr;

                curr = curr.next;
            }
            if (curr === null) {
                bools = false;
            }
            else {
                prev = curr;

                prev.next = curr.next;
                this.length--;
                bools = true;
            }
        }

        return bools;

    }//remove

    //finds an item returns true if that item found otherwise return false
    contains(x) {
        let hash = x.hashVal();

        let index = hash % this.#size;

        if (this.hashArray[index] === undefined)
            return false;
        else {
            let node = this.hashArray[index];

            while (node !== null && !node.data.equals(x.key)) {
                node = node.next;
            }
            if (node === null) {
                return false;
            }
            else {
                return true;
            }
        }

    }//constains 

    isEmpty() {
        return this.length === 0;
    }//isEmpty

}//HashTable class


//exporting hashtable
module.exports = HashTable;