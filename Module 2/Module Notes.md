Algorithim

- a sequence of steps that is described in a written form. usually its easier to solve complex problem, if you try to illustrate it in a graphical form such as a graphical illustration called flowchart.
- a procedure usd to solve a problem or perform a computation

Syntax

- tells computer how to read the code. it includes rules on how to declare variables, work with them and punctuation to use.

3 types of algorithim

1. linear - step-by-step instruction
2. branched - helps to reflects scenarios
   (conditional based)

3. cyclic - one repeats one action multiple times
   (include loop conditions)

Iteration

- single execution of the loop code block

---

Data types can be mutable or immutable
Immutable

- strings
- numbers
- booleans
- null
- undefined

Mutable - a type of variable that can be changed without creating an entirely new value

- arrays
- objects

---

Function - a block of code that usually executes a task or some calculation. it accepts arguments as inputs in the parenthesis
and returns an output

function - keyword use to declare a function
return - keyword use to get get function output
local - variables are declared inside the function and can only be access inside the functions code block
conditional statement - not necessary to declare in a function

STRING METHODS

1. slice
   var status = "world"
   status.slice(1) = "w"

JavaScript methods - are predefined actions that can be called from an object to perform a task
arr.length = returns the number of chars in a string
arr.slice(0,5) = extracts a part of a string and return the string from p1(start index) - p2(end index)
arr.substring(0,3) =

closures

- a function inside a another function
- helps us prevent unwanted user actions

callbacks

- functions that are passed as an argument to another function

memory lifecycle
1 - javascript allocates the memory that you need
2 - you used the allocated memory

recursion

- built with 2 parts(base and recursive call)

debugging codes
a. reproduce the bug
b. take time to analyze

types of errors

1. syntax - happens when you have wrong syntax
2. runtime - occurs when you forgot to install certain package or dependencies
3. logic - getting undesired output

devtool - provides big role to debug your code
parts of devtool

1. console - loggers
2. code editor - able to open files and see where the error is located
3. file navigator - able to see the file that has been runnnig or open
4. debugging pane - where breakpoints is located

Preprocessors = are like scripts that help you write css files
Compiler = translate preprocessor SASS language into CSS

Different preprocessors

1. Sass (variables, css rules using nesting, mixins, modules)
2. LESS
3. stylus

DOM

- a remote controller that fetch, update and create elements document in an element
- it is the way to interact with the user the web page which allows your app to be dynamic
- using dom you can minipulate elements using its attributes

DOM elements can be selected by:

1. tags - div, span, section
2. id selectors -
3. class selectors
4. attributes - <input type="text">

LEARNINGS

- select elements, query selectors, dom manipulation

DOM EVENTS

- are signals that some user actions happened
- triggers javascript functions through handlers

FORMS

- use to collect data
- use to gather search criteria from a user
- to transmit data to a server for processing

FORM

- form validation
- form methods

Git and Github
Git - a local repository use to manage website versions
Github - online service where you can manage several git repositories

Memory

- delete the file from the memory when they are not used anymore

Memory lifecycle in JS

1. allocates the memory that you need
2. you use the allocated memory
3. js releases the allocated memory when its not needed using the garbage collector

Garbage collector

- an automatice memory management tool of javascript
- chech if the memory is still in use
- Memory management starts when the programmer initializes a variable with a value of string, number, object, or even a function. Any variable that is initialized in the program, the memory life cycle takes place. The keyword for this is initialize which means assigning a value to a variable

Mark-and-sweep algorithm

- check if a memory value is still reachable or not before deleting

JAVASCRIPT CLASSES

- special functions that once you call it, it will create object with predefined characteristics
- it can be used for frameworks and libraries

2 types of how js classes are created

1.  Class expression - creating a class and putting it in a variable
    ex:
    class personn = class{
    constructor(){

        }

        sayHi(){
            console.log('Hi')
        }

    }

2.  Class declaration
    class Person { // class instance -- name Person
    constructor(name, gender){ // special function for
    initializing the classes
    this.name = name // class property instantiation
    this.gender = gender
    }

        greet(){ // class method
            console.log('test')
        }

}

Github

- one of the most collboration tool to manage application
- manage repositories
-

github features

- git clone <repo.git>
- git checkout -b 'feature/index'
- git push origin 'feature/index'
- git checkout <repo_name> access repo
- git fetch && git pull - pull the latest code update
- pull request - asking your team mate to review your code
  title:
  a. feat: <title> - for feature
  b. fix: <title> - for resolving bugs
  c. chore: <title> - code cleanup or refactor
- merge pull request
  a. create a merge commit - merge repo from pull request
  b. squash and merge - automatically delete all merge branch to main
