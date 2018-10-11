"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.TEST_NET);
exports.MOSAIC_NAME = 'cache';
exports.createSimpleWallet = function (password) {
    var pass = new nem_library_1.Password(password);
    return nem_library_1.SimpleWallet.create(exports.MOSAIC_NAME + "-wallet", pass);
};
// const blockHttp = new BlockHttp();
// blockHttp.getBlockByHeight(1675667).subscribe(block => {
//     console.log(block);
// });
// const chainHttp = new ChainHttp();
// chainHttp.getBlockchainLastBlock().subscribe(block => {
//     console.log(block);
// })
var accoutHttp = new nem_library_1.AccountHttp();
accoutHttp.getFromAddress(new nem_library_1.Address('TANXDSNMIMXHOD3IK7I556KPTDXFYBRNEQTTOY7K')).subscribe(function (account) {
    console.log(account);
});
accoutHttp.getFromAddress(new nem_library_1.Address('TDG2CJZTM7X2P6TX4L7M7XO7MJ27QTJ2X4JHZ2WU')).subscribe(function (account) {
    console.log(account);
});
// const userInfo = {
//     fullName: 'Van Minh Nguyen',
//     dob: '29/11/1996',
//     gender: 'male'
// }
// console.log(SHA256(JSON.stringify(userInfo)).toString().toUpperCase());
