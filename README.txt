There are six files,they are :

1.Hash_Able : it implements an abstract class- Hashable and three subclasses of that Hashable class- Inthash,StringHash and KeyValHash class.

2.HashTable : implements hash table with separate chain.

3.Test : this is unit testing for for HashTable(question 1).

4.Dictionary : implements dictionary with hashtable.

5.Encode : encode into .lzw file.

6.Main : main class to run Encode class. It takes file name from command line and sends that file to Encode class's encode method to do lzw encoding.


** one encoded output file named "A4output.txt.lzw" for given "hamlet.txt". There is also one decoder.java file that has been given to us.

*****
NOTE:
*****
When compiling code from command line with a file name it will write into file name "A4output.txt.lzw". For example: giving a file name "hamlet.txt" from command line will write into a file named "A4output.txt.lzw". After decoding the file a new file named "AA4output.txt.unzip" will create. To see things inside rename the file with "Anynameyouwant.txt". 

**After compile one .lzw file at a time, decode that file to see real output. If you want to recompile it later just delete the former .lzw file and then compile, it will create same .lzw file but this time without append, otherwise intended file will append to output file each time it recompiles.