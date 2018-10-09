import { SimpleWallet, Password, NEMLibrary, NetworkTypes } from 'nem-library';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

const createSimpleWallet = (password: string): SimpleWallet => {
    const pass = new Password(password);
    return SimpleWallet.create('test wallet', pass);
};

const firstWallet = createSimpleWallet('vanminhnguyenbmt');
console.log(firstWallet);

const myAccount = firstWallet.open(new Password('vanminhnguyenbmt'));
console.log(myAccount);
