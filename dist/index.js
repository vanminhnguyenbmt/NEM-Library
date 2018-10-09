"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.TEST_NET);
var createSimpleWallet = function (password) {
    var pass = new nem_library_1.Password(password);
    return nem_library_1.SimpleWallet.create('test wallet', pass);
};
var firstWallet = createSimpleWallet('vanminhnguyenbmt');
console.log(firstWallet);
var myAccount = firstWallet.open(new nem_library_1.Password('vanminhnguyenbmt'));
console.log(myAccount);
