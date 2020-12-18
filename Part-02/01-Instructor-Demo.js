// Within a given function, all variables previously defined outside of the
// function can be accessed inside that function.

// helloMessage is in the outer scope of the closures of printHelloMessage
// and printMessageAgain.
let helloMessage = "Hello World!";

function printHelloMessage() {
    // Here we're in the outer scope of printMessageAgain
    console.log("The value of helloMessage is: " + helloMessage);

    // You can define functions within a function!
    function printMessageAgain() {
        console.log("helloMessage is also accessible here! Its value is: " + helloMessage);
    }

    printMessageAgain();
}

printHelloMessage();

// You can access outside variables from within a closure, but you cannot access
// a variable from outside its closure.
function setValue() {
    let value = 0;
}

// This will cause an error because `value` is only defined within setValue, so
// it can only be used inside that function.
setValue();
value = value - 1; // This should print 'ReferenceError: magicNum is not
                   // defined' with a stacktrace and then crash the program
