import { SimpleWallet, Password, NEMLibrary, NetworkTypes, AccountHttp, Address } from 'nem-library';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// const createSimpleWallet = (password: string): SimpleWallet => {
//     const pass = new Password(password);
//     return SimpleWallet.create('test wallet', pass);
// };

// const firstWallet = createSimpleWallet('vanminhnguyenbmt');
// console.log(firstWallet);

// const myAccount = firstWallet.open(new Password('vanminhnguyenbmt'));
// console.log(myAccount);

const accountHttp = new AccountHttp();
accountHttp.allTransactions(new Address('TDG2CJZTM7X2P6TX4L7M7XO7MJ27QTJ2X4JHZ2WU'))
    .subscribe(allTransactions => {
        console.log(allTransactions);
    });