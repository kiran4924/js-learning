// Object Extraction

// JS

var user = {
    name: "Kiran",
    age: 36
}

var myName = user.name;

console.log(myName, user.age);


// ES6

const user2 = {
    name: "Divit",
    age: 5
}

const {name, age} = user2;

// Now we are free to use name and items variables wherever we want
console.log(name, age);