/* 1. Array in javascript
An array is a collection of items of the same variable type stored that are stored at contiguous memory locations. 
It’s one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with 0.

Declaration of an Array: There are basically two ways to declare an array.

Syntax:

let arrayName = [value1, value2, ...]; // Method 1
let arrayName = new Array(); // Method 2

Types of Array operations:

Traversal: Traverse through the elements of an array.
Insertion: Inserting a new element in an array.
Deletion: Deleting element from the array.
Searching:  Search for an element in the array.
Sorting: Maintaining the order of elements in the array.
Below is the implementation of the array in javascript:
*/

// Initializing while declaring
// Creates an array having elements 10, 20, 30, 40, 50
var house = new Array(10, 20, 30, 40, 50);
    
// Creates an array of 5 undefined elements
var house1 = new Array(5);
    
// Creates an array with element 1BHK
var home = new Array("1BHK");
console.log(house)
console.log(house1)
console.log(home);