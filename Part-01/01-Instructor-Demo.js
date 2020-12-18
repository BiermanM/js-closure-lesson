// Closure = A function and the data that can be accessed within that function.
// Scope = The area a variable can be accessed in.

// Let's create a function that adds two numbers together.
function add(num1, num2) {
    return num1 + num2;
}

// Let's try calling the function. This example should print an output of 8.
let sum = add(5, 3);
console.log(sum);

// Now let's create a new function that takes the sum of two inputted numbers
// plus a "magic number". We'll call this a "magic number" because you shouldn't
// be able to read it or change it from outside the function.
function sumWithMagicNumber(num1, num2) {
    let magicNum = 75; // magicNum is defined here, so its local scope is within
                       // the sumWithMagicNumber function
    return num1 + num2 + magicNum;
}

let sum2 = sumWithMagicNumber(5, 4);
console.log(sum2); // This should print 84

// If we try printing the value of magicNum, it'll give us an error because
// magicNum was defined within the closure of sumWithMagicNumber, so it can only
// be accessed within sumWithMagicNumber
console.log(magicNum); // This should print 'ReferenceError: magicNum is not
                       // defined' with a stacktrace and then crash the program
