import { SimpleWallet, Password, NEMLibrary, NetworkTypes, AccountHttp, Address } from 'nem-library';

NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

export const MOSAIC_NAME = 'cache';

export const createSimpleWallet = (password: string): SimpleWallet => {
    const pass = new Password(password);
    return SimpleWallet.create(`${MOSAIC_NAME}-wallet`, pass);
};