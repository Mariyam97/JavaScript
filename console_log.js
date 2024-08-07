/* console.dir()` displays an object’s
properties in an interactive, tree-like
format in the console. */
let fruits = ["apple", "banana", "cherry"];
console.dir(fruits);

/*  `
console.table()` displays tabular data
in a table format in the console.*/

let users = [
   {name:"Alice", age:28},
   {name:"Bob", age:34}
];
console.table(users);

/* 
console.group() creates a new group
in the console for nested log
messages, which can be expanded or
collapsed.*/
console.group("User Info");
console.log("name: Alice");
console.log("age: 28");
console.groupEnd();

/*
console.time() starts a timer with a
specified label, and console.timeEnd()
stops the timer and logs the elapsed
time.*/ 
console.time("Timer");

let sum = 0;
for(let i=0; i <1000; i++) {
   sum +=i;
}
console.timeEnd("Timer");

/* `
console.clear()`
clears all messages
from the console.*/
console.log("This message will be cleared.");
console.clear();
console.log("This message appears after clearing");