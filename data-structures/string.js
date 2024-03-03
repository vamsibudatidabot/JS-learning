/*
JavaScript strings are used for storing and manipulating text. It can contain zero or more characters within quotes.

Creating Strings: There are two ways to create a string in Javascript:
    By string literal
    By string object

String operations:
    Substrings:  A substring is a contiguous sequence of characters within a string
    Concatenation: This operation is used for appending one string to the end of another string.
    Length: It defines the number of characters in the given string. 
    Text Processing Operations: Text processing is the process of creating and editing strings.
        Insertion: This operation is used to insert characters in the string at the specified position.
        Deletion: This operation is used to delete characters in the string at the specified position.
        Update: This operation is used to update characters in the string at the specified position.
*/

// String written inside quotes
var x = "Welcome to GeeksforGeeks!";
console.log(x);

// Declare an object
var y = new String("Great Geek");
console.log(y);


let a = "abcdefgh";

// Finding the first index of the character 'b'
console.log(a.indexOf('b'));


let a2 = "Hello World";

let arrString = ["Geeks", "for", "Geeks"]

// Replacing the word 'World' with 'Geeks'
console.log(a2.replace("World", arrString[0]));
