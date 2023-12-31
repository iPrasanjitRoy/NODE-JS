// Import The MathOperations Module
const MathOperations = require('./Modules/MathOperations');



// Use The Functions From The Module
console.log('Addition:', MathOperations.Add(5, 5));
console.log('Subtraction:', MathOperations.Subtract(10, 5));
console.log('Multiplication:', MathOperations.Multiply(10, 10));

const myDateTime = require('./Modules/Moudle');
const dateTime = myDateTime();
console.log(dateTime);

