// Variables

// OLD JS

var counter1 = 10;
// Re-creation of vars allowed
var counter1 = 5;

console.log("counter1: " + counter1);

// function scoping of a variable 'name'
function printName() {
    var name = "Kiran";
    console.log("var within function scope: name=" + name);
}

printName();
// var 'name' not available outside function scope
// console.log(name);

var todoList1 = ["Milk","Biscuit"];

for(var i=0; i<todoList1.length; i++) {
    console.log("todoList1[" + i + "]=" + todoList1[i]);
}

console.log("var leaks out of block scope: i=" + i);

// ES6

const todoList2 = ["Milk","Biscuit"];

// Reassignment of const not allowed
// todoList = ["Curd"];

// Block scope of let
for(let j=0; j<todoList2.length; j++) {
    console.log("todoList2[" + j + "]=" + todoList2[j]);
}

// let j is localized to the block scope and not visible outside
// console.log(j);

let counter2 = 10;
counter2 = 5;

console.log("counter2: " + counter2);