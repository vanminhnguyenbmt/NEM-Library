import { MOSAIC_NAME, createSimpleWallet } from "../src";
import { Password, SimpleWallet, Account } from "nem-library";

const fs = require('fs');
const os = require('os');

const prompts = require('prompt');

const args = process.argv.slice(2);
const PATH_HOME = `${os.homedir()}/${MOSAIC_NAME}-wallets-dev`;
const PATH_WALLET = `${PATH_HOME}/${MOSAIC_NAME}-wallet.wlt`;


const downloadWallet = (wallet: SimpleWallet) => {
    console.log('\nDownloading wallet for your covenience.\n' +
        'Please store someplace safe. The private key is encrypted by your password.\n' +
        'To load this wallet on a new computer you would simply import the .wlt file' +
        ' into this app and enter your password and you will be able to sign transactions');

    if (!fs.existsSync(PATH_HOME)) {
        fs.mkdirSync(PATH_HOME);
    }
    let fullPath = PATH_WALLET;
    if (fs.existsSync(fullPath)) {
        const stamp = new Date().toDateString();
        fullPath = `${PATH_HOME}/${stamp}-${MOSAIC_NAME}-wallet.wlt`;
    }
    fs.writeFileSync(fullPath, wallet.writeWLTFile());
    console.log(`Downloaded wallet to ${fullPath}`);

};

const loadWallet = (): SimpleWallet => {
    const contents = fs.readFileSync(PATH_WALLET);
    return SimpleWallet.readFromWLT(contents);
};

const openWallet = (wallet: SimpleWallet): Promise<Account> => {
    return new Promise<Account>((resolve, reject) => {
        prompts.message = 'wallet login';
        prompts.start();
        prompts.get({
            properties: {
                password: {
                    description: 'Password',
                    hidden: true
                }
            }
        }, (_, result: any) => {
            const pass = new Password(result.password);
            try {
                resolve(wallet.open(pass));
            } catch (err) {
                console.log(`${err}`);
                console.log('Please try again');
                reject();
            }
        })
    });
};

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
            const pass = new Password(result.password);
            const account = wallet.open(pass);
            const address = account.address.pretty();
            console.log(`${MOSAIC_NAME} wallet successfully created\n`);
            console.log(`You can now start sending and receiving ${MOSAIC_NAME}\n`);
            console.log(`Public Address: ${address}`);
            downloadWallet(wallet);
        }
    })
};

const main = async () => {
    if (args[0] === 'wallet') {
        if (args[1] === 'create') {
            createWallet();
        }
    }

    const wallet = loadWallet();
    const account = await openWallet(wallet);
    console.log(account);
};

main();