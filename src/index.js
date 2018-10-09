"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nem_library_1 = require("nem-library");
nem_library_1.NEMLibrary.bootstrap(nem_library_1.NetworkTypes.TEST_NET);
exports.MOSAIC_NAME = 'cache';
exports.createSimpleWallet = function (password) {
    var pass = new nem_library_1.Password(password);
    return nem_library_1.SimpleWallet.create(exports.MOSAIC_NAME + "-wallet", pass);
};
