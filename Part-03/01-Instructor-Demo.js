// By defining a variable outside of all functions, it can be accessed by any
// subsequent function.
let car = "Toyota Camry";

function globalScopeExample() {
    console.log("I drive a " + car + " to work.");
}

function myFriendsCar() {
    console.log("My name is Joe and I also drive a " + car + ".");
}

globalScopeExample();
myFriendsCar();

// Please note that the variable has to be defined before the function
// is called.

// That means that this works:

function printName() {
    console.log(myName);
}

let myName = "Matthew";
printName(); // This works because you're setting the value of myName before the
             // code inside printName is actually being executed

// But this doesn't work:

function printNickname() {
    console.log(nickname);
}

printNickname(); // You'll get a ReferenceError here because you're trying to
                 // use a variable that has not yet been defined
let nickname = "Matt";
