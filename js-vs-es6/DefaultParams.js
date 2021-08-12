// JS

function multiply(x, y) {
    // Default values added to prevent NaN
    var a = x || 1;
    var b = y || 1;
    console.log(a*b);
}

multiply();
multiply(5);
multiply(5,10);


// ES6

// Inline default parameter assignment
const add = (x = 0,y = 0) => console.log(x+y);

add();
add(5);
add(5,10);