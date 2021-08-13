// Object Extraction

// JS

var user1 = {
    name: "Kiran",
    age: 36
}

var myName = user1.name;

console.log(myName, user1.age);


// ES6

const user2 = {
    name: "Divit",
    age: 5
}

const {name, age} = user2;

// Now we are free to use name and items variables wherever we want
console.log(name, age);