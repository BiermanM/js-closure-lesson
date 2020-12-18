var clickCount = 0;

function clickButton(clickType) {
    // where should you call doubleClick and rightClick within this function?

    function doubleClick() {
        // if the clickType is 'double', add another click to the clickCount
    }

    function rightClick() {
        // if the clickType is 'right', set the clickCount to 0
    }

    clickCount = clickCount + 1;
}

clickButton();
clickButton();
clickButton('right');
clickButton();
clickButton('double');
clickButton('double');
clickButton('right');
clickButton();
console.log("Number of button clicks: " + clickCount);
