// Comment up to 2 lines within the powerOf4 function to get the function working properly

function powerOf4(num) {
    let result = num;

    function powerOf2() {
        return result * result;
    }

    function multiplyByNum() {
        // let result = powerOf2();        We're redefining `result` to have a scope that's local to multiplyByNum by using `let result = `
        result = powerOf2();
    }

    result = powerOf2();
    // powerOf2();                         this multiplies result with itself, but it doesn't set that value anyway, so this line does nothing
    multiplyByNum();

    return result;
}

console.log(powerOf4(5)); // should print 625
console.log(powerOf4(2)); // another example, should print 16
console.log(powerOf4(10)); // another example, should print 10000
