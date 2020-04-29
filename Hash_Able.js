'use strict';

//Abstract HashAble class
class HashAble {
    constructor() {
        if (this.constructor === HashAble) {
            throw new Error("Don't create an abstract class");
        }
        else { }
    }//constructor

    //abstarct methods
    hashVal() {
        throw new Error("It's an abstract method");
    }
    equals(x) {
        throw new Error("It's an abstract method");
    }

}//HashAble class


//IntHash class
class IntHash extends HashAble {
    #initval; //an int value
    constructor(initval) {
        super();
        this.#initval = initval;

    }//constructor

    //getter method
    get key() {
        return this.#initval;
    }


    hashVal() {

        let hash = 0;
        hash += this.#initval;



        return hash;
    }//hashVal

    equals(x) {
        return (x === this.#initval);

    }//equals

}//IntHash class*/


//StringHash class
class StringHash extends HashAble {
    #str; //string 
    constructor(str) {
        super();
        this.#str = str;
    }
    get key() {
        return this.#str;
    }

    hashVal() {
        let primeNum = 31;
        let hash = 0;
        let len = this.#str.length;
        let char;
        for (let i = 1; i <= len; i++) {
            char = this.#str.charCodeAt((i - 1));
            hash += char * Math.pow(primeNum, (len - i));

        }

        return hash;
    }//hashVal 


    equals(x) {
        return x === this.#str;


    }//equals

}//StringHash class


//keyValuehash class
class KeyValueHash extends HashAble {
    #key;
    #val;
    constructor(key, val) {
        super();
        this.#key = key;
        this.#val = val;
    }
    //getter methods
    get key() {
        return this.#key;
    }

    get val() {
        return this.#val;
    }
    set val(x) {
        this.#val = x;
    }

    hashVal() {
        let primeNum = 31;
        let hash = 0;
        let len = this.#key.length;
        let char;

        for (let i = 1; i <= len; i++) {
            char = this.#key.charCodeAt((i - 1));
            hash += char * Math.pow(primeNum, (len - i));

        }



        return hash;
    }//hashVal


    equals(x) {

        return x === this.#key;

    }//equals
}// KeyValueHash  class


//exporting all classes


module.exports = {
    HashAble: HashAble,
    IntHash: IntHash,
    StringHash: StringHash,
    KeyValueHash: KeyValueHash
}

