"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.TEST_NET);
// const createSimpleWallet = (password: string): SimpleWallet => {
//     const pass = new Password(password);
//     return SimpleWallet.create('test wallet', pass);
// };
// const firstWallet = createSimpleWallet('vanminhnguyenbmt');
// console.log(firstWallet);
// const myAccount = firstWallet.open(new Password('vanminhnguyenbmt'));
// console.log(myAccount);
var accountHttp = new nem_library_1.AccountHttp();
accountHttp.allTransactions(new nem_library_1.Address('TDG2CJZTM7X2P6TX4L7M7XO7MJ27QTJ2X4JHZ2WU'))
    .subscribe(function (allTransactions) {
    console.log(allTransactions);
});
