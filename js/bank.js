/**
 * Created by Krysp on 5/5/16.
 */
function Profile(name, savings, checking) {
    this.name = name;
    this.savings = savings;
    this.checking = checking;

    this.transfer = function (accountTo, accountFrom, amount) { }
}

var Account = function (balance, accountNumber) {
    this.balance = balance;
    this.accountNumber = accountNumber;

    this.withdraw = function (amount) {};
    this.deposit = function (amount) {};
};

var SavingsAccount = function (interestRate, balance, accountNumber) {
    Account.call(this, balance, accountNumber);
    this.interestRate = interestRate;
};

var CheckingAccount = function (numberOfChecks, balance, accountNumber) {
    Account.call(this, balance, accountNumber);
    this.numberOfChecks = numberOfChecks;
};

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

function createProfile(name, checkingsBalance, savingsBalance, interestRate, numberOfChecks) {


    var checkingAccount = new CheckingAccount(numberOfChecks, checkingsBalance, 9979078778);
    var savingsAccount = new SavingsAccount(interestRate, savingsBalance, 9489878787);

    var profile = new Profile(name, savingsAccount, checkingAccount);

    return profile;
}


var Bank = function(name, location){
    this.userProfiles = [];
    this.addProfile = []
    return Bank; 
};
var bankOfAmerica = new Bank('America first', 'New Zealand');


