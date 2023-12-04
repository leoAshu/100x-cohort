function sum(num1, num2, callback) {
    callback(num1 + num2)
}

function displayResult(data) {
    console.log('Result of the sum is: ' + data);
}


function displayResultPassive(data) {
    console.log('Sum\'s result is: ' + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum?
sum(1, 2, displayResultPassive)