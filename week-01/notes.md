# Week 1

## Programming Languages

-   computers understand 0s & 1s
-   programmers need some language that can be converted to 0s & 1s
-   languages are used to write applications
-   developers write high level code in these languages
-   every language has a compiler that converts high level code into 0s & 1s

### Compiled vs Interpreted Languages

#### Compiled Language

-   c++, java
-   3 steps
    -   write code
    -   compile code
    -   run code

#### Interpreted Language

-   javascript
-   2 steps
    -   write code
    -   run code

### Static vs Dynamic Languages

### Static Language

    -   c++, java
    -   the type of a variable is defined when it is first initialized
    -   the type of the variable is fixed and cannot change

#### Dynamic or Loosely-typed Language

    -   javascript
    -   the type of a variable depends on the type of data it holds
    -   the type of the variable is not fixed and can change

## JavaScript

### Single-threaded

-   JavaScript is single-threaded and can only use one core at a time
-   a reason why considered a bad language for scalable systems
-   however, it is possible to make it use all cores of a machine
-   more practically, JavaScript runes line by line and only one line at a time

### Architecture

-   JavaScript runtime environment comprises of four main components
    -   Call Stack
    -   Web Apis
    -   Callback Queue
    -   Event Loop
-   designed to allow for the handling of both synchronous and asynchronous tasks

#### Call Stack

-   is a mechanism for managing function calls in the code
-   follows the Last In First Out (LIFO), where the last function gets added is the first to be executed
-   as functions are called, they are pushed onto the stack, and when a function completes its execution, it is popped off the stack

#### Web APIs

-   are provided by the browser environment and are not part of the JavaScript language itself
-   examples include the DOM API, AJAX API, and Timers API
-   allow JavaScript to interact with the browser environment, manipulate the document, handle asynchronous tasks
-   can handle multiple async calls simultaneously

#### Callback Queue

-   processed asynchronous operations, such as handling user input, making network requests, or using timers
-   when an asynchronous operation completes, its callback function is pushed to the Callback Queue
-   follows the First In First Out (FIFO) principle, meaning the first callback added is the first to be processed

#### Event Loop

-   continuously checks the Call Stack and Callback Queue, coordinating the execution of code
-   when the Call Stack is empty, the Event Loop picks the first callback from the Callback Queue and pushes it onto the Call Stack for execution
-   this ensures that asynchronous operations and callbacks are handled in a non-blocking manner

### Promises

-   are syntactical sugar that makes asynchronous code definitions slightly more readable
-   are returned synchronously, however they may or may not resolve in the future
-   have three states
    -   Pending
    -   Resolved
    -   Rejected

#### Ugly way

```
const fs = require('fs')

//custom async function
function customReadFile(cb) {
    fs.readFile('a.txt', 'utf-8', function (err, data) {
        cb(data)
    })
}

// callback function
function onDone(data) {
    console.log(data)
}

customReadFile(onDone)
```

#### Using Promises

```
const fs = require('fs')

//custom async function
function customReadFile() {
    return new Promise(function (resolve) {
        fs.readFile('a.txt', 'utf-8', function (err, data) {
        resolve(data)
        })
    })
}

// callback function
function onDone(data) {
    console.log(data)
}

customReadFile().then(onDone)
```

#### Async Await

-   another syntactical sugar to further improve the code readability

```
const fs = require('fs')

//custom async function
function customReadFile() {
    return new Promise(function (resolve) {
        fs.readFile('a.txt', 'utf-8', function (err, data) {
        resolve(data)
        })
    })
}

async function main() {
    const data = await customReadFile()
    console.log(data)
}
```
