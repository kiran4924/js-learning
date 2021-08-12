// JS

function printName() {
    console.log("My name is Kiran");
}

function printAge() {
    console.log("My age is 36");
}

printName();
printAge();

// ES6

const printLocation1 = (location) => {
    console.log(`I am from ${location}`);
}
// OR
const printLocation2 = (location) => console.log(`I am from ${location}`);
// OR
const printLocation3 = location => console.log(`I am from ${location}`);

printLocation1("Bangalore");
printLocation2("Sydney");
printLocation3("Parramatta");