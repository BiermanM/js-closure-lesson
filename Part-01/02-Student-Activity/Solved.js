function getBalance() {
    let balance = 50;
    return balance;
}

function withdrawTenDollars(currentBalance) {
    let newBalance = currentBalance - 10;
    console.log("Withdrawing $10");
    return newBalance;
}

function depositTenDollars(currentBalance) {
    let newBalance = currentBalance + 10;
    console.log("Depositing $10");
    return newBalance;
}

let bankAccountBalance = getBalance();
bankAccountBalance = withdrawTenDollars(bankAccountBalance);
bankAccountBalance = withdrawTenDollars(bankAccountBalance);
console.log("My remaining balance is $" + bankAccountBalance);
