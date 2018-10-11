import { SimpleWallet, Password, NEMLibrary, NetworkTypes, AccountHttp, Address, ChainHttp, NodeHttp, BlockHttp } from 'nem-library';
import { SHA256 } from 'crypto-js';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

export const MOSAIC_NAME = 'cache';

export const createSimpleWallet = (password: string): SimpleWallet => {
    const pass = new Password(password);
    return SimpleWallet.create(`${MOSAIC_NAME}-wallet`, pass);
};

// const blockHttp = new BlockHttp();
// blockHttp.getBlockByHeight(1675667).subscribe(block => {
//     console.log(block);
// });

// const chainHttp = new ChainHttp();
// chainHttp.getBlockchainLastBlock().subscribe(block => {
//     console.log(block);
// })

// const accoutHttp = new AccountHttp();
// accoutHttp.getFromAddress(new Address('TANXDSNMIMXHOD3IK7I556KPTDXFYBRNEQTTOY7K')).subscribe(account => {
//     console.log(account);
// })

// const userInfo = {
//     fullName: 'Van Minh Nguyen',
//     dob: '29/11/1996',
//     gender: 'male'
// }

// console.log(SHA256(JSON.stringify(userInfo)).toString().toUpperCase());