// Comment up to 2 lines within the powerOf4 function to get the function working properly

function powerOf4(num) {
    let result = num;

    function powerOf2() {
        return result * result;
    }

    function multiplyByNum() {
        let result = powerOf2();
        result = powerOf2();
    }

    result = powerOf2();
    powerOf2();
    multiplyByNum();

    return result;
}

console.log(powerOf4(5));
