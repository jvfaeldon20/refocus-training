Javascript
- programming language to create a dynamic web pages. Makes a web page respond to events and user's actions/
- works closely with HTML and CSS to create user interfaces

KEY POINTS
[ MODULE 1 ]
- A web server is a program that keeps or generates web pages or HTML
- when you want to load a web page, your browser asks a web sercer to provied the web pages content
- the internet mainly works on HTML, CSS, and Javascript
- you use the HTML to make sure and content of a web page, CSS -- to design it, and javascript - to make the page interactive

Variables in Javascript
let - keyword to create a variable for storing dynamic values
var - old keyword to create variable
const - keyword to create a constant

Types of Data
String - surrounded by quotes (single, double, backticks)
boolean - commonly use to store yes or no from a comparison
NaN - means error. can get when a number is divided by 0


Values
null value - represents nothing, empty or value unknown
undefined values - means that the value is not assigned. if a variable is declared by not assigned, then its value is undefined.

Types of objects
Object groups - a combination of string, text and other data types put together to create a model
Arrays - special types of objects. can hold multiple objects

Typeof operator
- returns the type of the argument
- supports 2 forms of syntax
typeof x
typeof(x)
- ex: undefined, number, boolean, string, symbol, object, function

Basic operators
logical operators
a. and - 1st operand is false, result is false
b. or - 1st operand is true, result is true,mk

Comparison Operator - operators which result is a boolean

Function 
local variables - only works inside a functions
global variables - works in any functions


If statement - evaluates if a condition is true. if it is, it executes a block of code
LOOPS
1. The while loop
let i = 0
while(i<3>){
    console.log(i);
    i++
}

2. Do While
let i = 0
do{
    //loop body
}
while(condition)

3. For loop
for(begin; condition; step){
    //loop body
}

<!-- For loop with skip parts -->
let i=0;
for(;i<3;){
    console.log(i++)
}

<!-- infinite loop -->
for(;;){
    console.log(1)
}

break directive - stops the loops immediately and passes the control to the first line after the loop w/c in the sample is console.log()
let sum = 0;
while(true){
    let value = +prompt("Enter a number");
    if(!value) break; //(*)
    sum += value
}
console.log('Sum:'+sum)

continue - it stops not the whole loop but the current iteration
for(let i=0;i<10;i++){
    //if true, skip the remaining part of the body
    if(i%2==0) continue;
    console.log(i)
}

RECALL
Javascript code  - chrome devtools and console.log
Variables - named storage for data. calculate with variables
Data types 
- use different types to represent information correctly
- learn data types to understand what kinds of operations to perform on a given type.


Arrays
- collection of values that holds more than 1 value
- declare array
- undefined is the error if an array index in unreachable

Object
properties= describe what is the object like
methods= what you can do with the object
accesing objects can be done thru:
dot notation = object.keyProperty
square bracket notation = object["keyPropertyName"]

square  bracket notation can allow user to access specific property

Object
- can contain objects as property values

Functions
- are basically objects
    a. you can store them inside a variable
    b. you can declare a function inside another function
    c. you can use a function as a parameter in another function

Closures 
- means that you can create a function inside a function. that means that you can use inner function as an output.

Callbacks

Difference between closures and callbacks
In callbacks, you can call any function. with callbacks, you can create 1 function and create another function that
can utilize the first one as a callback

In closures,all variables you create in a function can only be used inside a function

TIPS on using callbacks and closures
- if you need to later call all the functions in different situations, use callbacks. If you dont use closures
- Use callbacks if you meed to call all functions later in your code
- Use closures if you dont need to do that


RECURSIONS
- To create a recursion, we need a base case nd a recursive call
base case - a condition that tells us when to stop
example: BASECASE
function openDoll(doll){
    if(doll == "FoundT= Toy" && doll index == "last"){
        <!-- tody is found -->
    }


recursive call - contains actions to perform calling that same function with different argument passed on the first time
example: RECURSIVE CALLL
   else{
        openDoll(new doll)
   }
}

recursion helps us make a solution to a problem by calling a copy of itself and solving sub problems of the original problem is repeated multiple times, recursion will help you with that. The other options here don't make sense.

 difference between recursion and loops
 recursion is like a russian matryoshka doll: a function inside itself is like a doll inside the same but bigger doll. a loop is just like a single doll : it executes instructions only once for each element


ARRAY METHODS (examples on guided practice)

UNRAVEL ARRAY METHODS

DEBUGGING
- reproduce the bug


TYPES OF ERRORS
1. Syntax - forgot to close brackets
ex: const fruits = ["apple", "banana", "mango"];
2. runtime - forgot to install necessary library
3. logical 


Devtool
- where you debug your code in general

Git
- used to store source code of a website  and control its version
- beneficial for team dev collaboration

Why need Git
- helps us see a project's progress and code changes made by the team

Repository
- location where all code data is stored. branches and folders only help you
organize it.

Git vs Github
Git 
- software which is installed locally on a PC
- you need to write commands to get a result
- you can manage website versions in a repository

Github
- service which is hosted on the web
- you can use a graphical interface
- you can manahe several Git repositories


Git is short for Github. True or false
false - git is a local repository where you can manage website versions. Github is an online service where you can manage several Git repositories


Unit Testing
Procedure
Module
Function

Different types of Unit tests
1. Unit test
- you take small pieces of code and verify them

2. Integration test
- a test that checks how each piece of code interacts with other pieces

3. End to end test
-  test the whole program

Automated testing of keypoints will reduce the time to find errors and accordingly the time required to eliminate them

Stages of Testing
1. Arrange 
2. Act
3. Assert

Unit testing can only check values in string, boolean and number


Flexbox 
- flexible box is a tool for layouting
- contains the parent and the children


Displaying webpage in different devices
- for testing which network resources cause the issue, go to network > disable cache. check the logs 
- make sure to load correct resolution accoring to device screen orientatation.

