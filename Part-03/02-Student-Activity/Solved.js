var clickCount = 0;

function clickButton(clickType) {
    function doubleClick() {
        if (clickType === "double") {
            clickCount = clickCount + 1;
        }
    }

    function rightClick() {
        if (clickType === "right") {
            clickCount = 0;
        }
    }

    clickCount = clickCount + 1;
    doubleClick();
    rightClick();
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
