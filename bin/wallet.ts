import { MOSAIC_NAME, createSimpleWallet } from "../src";

const prompts = require('prompt');

const args = process.argv.slice(2);

const createWallet = () => {
    console.log('\nPlease enter a unique password (8 character minimum).\n' +
        'This password will be used to encrypt your private key and make working with your wallet easier\n' +
        'Store this password somewhere safe. If you lose and forget it you will never be able to transfer funds');
    prompts.message = `${MOSAIC_NAME} wallet`;
    prompts.start();
    prompts.get({
        properties: {
            password: {
                description: 'Password',
                hidden: true
            },
            confirmPass: {
                description: 'Re-enter password',
                hidden: true
            }
        }
    }, (_, result: any) => {
        if (result.password !== result.confirmPass) {
            console.log('\nPasswords do not match\n\n');
            createWallet();
        } else {
            const wallet = createSimpleWallet(result.password);
            console.log(wallet);
        }
    })
};

const main = async () => {
    if (args[0] === 'wallet') {
        if (args[1] === 'create') {
            createWallet();
        }
    }
};

main();