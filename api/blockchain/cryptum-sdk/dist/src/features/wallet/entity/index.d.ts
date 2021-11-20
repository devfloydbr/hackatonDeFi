export class Wallet {
    /**
     * Constructor
     *
     * @param {object} args
     * @param {string} args.privateKey Wallet private key
     * @param {string} args.publicKey Wallet public key
     * @param {string} args.address Wallet address
     * @param {string=} args.xpub Wallet xpub address
     * @param {import('../../../services/blockchain/constants').Protocol} args.protocol blockchain protocol
     * @param {boolean} args.testnet blockchain testnet or mainnet
     */
    constructor({ privateKey, publicKey, address, xpub, protocol, testnet }: {
        privateKey: string;
        publicKey: string;
        address: string;
        xpub?: string | undefined;
        protocol: import('../../../services/blockchain/constants').Protocol;
        testnet: boolean;
    });
    protocol: string;
    privateKey: string;
    publicKey: string;
    address: string;
    xpub: string;
    testnet: boolean;
}
export class WalletInfoResponse {
    constructor(info: any);
}
