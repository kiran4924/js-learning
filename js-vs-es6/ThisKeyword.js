// JS

var user1 = {
    name: "Kiran",
    age: 36,
    printName: function() {
        console.log("My name is " + this.name);
        // Because 'this' loses context inside the chained function.  So 'this' has to be assigned to another var inside the function
        var that = this;
        var me = function() {
            // 'this' doesn't have context here
            console.log("My name is " + that.name + " and my age is " + that.age);
        }
        me();
    }
}

user1.printName();


// ES6

const user2 = {
    name: 'Divit',
    age: 5,
    printName: function() {
        console.log(`My name is ${this.name}`);
        // the arrow function can automatically detect 'this' object
        const me = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);        
        };
        me();
    }
};

user2.printName();