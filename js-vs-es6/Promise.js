// JS

// async call with callback handler function
function getData(data, callback) {
    setTimeout(() => console.log('JS reading data from DB'), 2000);
}

getData(5, function(data) {
    console.log(data);
});


// ES6

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ES6 reading data from DB');
    }, 3000);
});

const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 4000);
});

resolvePromise.then(data => console.log(data)).catch(err => console.log(err));
rejectPromise.then(data => console.log(data)).catch(err => console.log(err));