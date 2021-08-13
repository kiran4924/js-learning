// JS

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function() {
    console.log('My name is ' + this.name);
}

// To inherit properties
function RealPerson(name, age, occupation, hobby) {
    Person.call(this, name, age);
    this.occupation = occupation;
    this.hobby = hobby;
}

var me = new Person('Kiran', 36);

console.log(me);
me.getName();

// To inherit functionality
RealPerson.prototype = Object.create(Person.prototype);

var kiran = new RealPerson('Divit', 5, 'Student', 'Shouting');
console.log(kiran);
kiran.getName();


// ES6

class ShoppingList {
    constructor(items, count) {
        this.items = items;
        this.count = count;
    }
    getList() {
        console.log(this.items);
    }
}

const list = new ShoppingList(['Milk', 'Biscuit', 'Cheese'], 3);
console.log(list);

class ShoppingCart extends ShoppingList {
    constructor(items, count, cost) {
        super(items, count);
        this.cost = cost;
    }
}

const cart = new ShoppingCart(['Milk', 'Biscuit', 'Cheese', 'Chocs'], 4, 40);
console.log(cart);
cart.getList();