'use strict';
let Dictionary = require('./Dictionary.js');
let fs = require('fs');
class Encode {
    #filename;
    #dict;
    constructor(name) {
        this.#filename = name;
        this.#dict = new Dictionary();
        for (let i = 32; i <= 126; i++) {
            this.#dict.put(String.fromCharCode(i), i - 32);
        }

    }//constructor 

    //this method encoded keys into numbers and write output to a file with .lzw extension
    encode() {
        let out
        let i = 1;
        let val = 95;
        let curr_key = "";
        let contents = fs.readFileSync(this.#filename, "utf-8");
        let lines = contents.split("\n");

        for (let line of lines) {
            curr_key = line[0];
            i = 1;
            while (this.#dict.contains(curr_key) && line[i] !== undefined) {

                let last_key = curr_key;
                curr_key += line[i];
                if (!this.#dict.contains(curr_key)) {
                    this.#dict.put(curr_key, val);
                    out = this.#dict.get(last_key) + " ";
                    fs.writeFileSync("A4output.txt.lzw", out);
                    
                    i++;
                }
                else {
                    let stringLength = curr_key.length;
                    out = this.#dict.get(curr_key) + " ";
                    fs.writeFileSync("A4output.txt.lzw", out);
                    
                    curr_key += line[i + 1];
                    i = i + stringLength;

                }//if-else

                let len = curr_key.length;
                curr_key = curr_key[len - 1];
                val++;


            }//while
            out = this.#dict.get(curr_key) + " ";
            
            fs.writeFileSync("A4output.txt.lzw", out);
        }//for
    }//encode
}//Encode class
module.exports = Encode;