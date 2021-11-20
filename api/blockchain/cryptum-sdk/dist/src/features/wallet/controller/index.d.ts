export = Controller;
declare class Controller extends Interface {
    /**
     * Generate random words
     * @param {number} strength
     * @returns {string} list of random words
     */
    generateRandomMnemonic(strength?: number): string;
    /**
     * Generate new wallet
     *
     * @param {object} args
     * @param {Protocol} args.protocol blockchain protocol to generate the wallet for
     * @param {boolean=} args.testnet true for testnet and false for mainnet
     * @param {string=} args.mnemonic mnemonic seed
     * @param {object=} args.derivation object with information to derive one wallet (BIP44 derivation path)
     * @param {number=} args.derivation.account account index to derive wallet
     * @param {number=} args.derivation.change change index to derive wallet
     * @param {number=} args.derivation.address address index to derive wallet
     * @returns {Promise<Wallet>}
     */
    generateWallet({ protocol, mnemonic, testnet, derivation }: {
        protocol: Protocol;
        testnet?: boolean | undefined;
        mnemonic?: string | undefined;
        derivation?: object | undefined;
    }): Promise<Wallet>;
    /**
     * Generate new wallet from private key
     *
     * @param {object} args
     * @param {string} args.privateKey private key string
     * @param {Protocol} args.protocol blockchain protocol
     * @param {boolean=} args.testnet true for testnet and false for mainnet
     * @returns {Promise<Wallet>}
     */
    generateWalletFromPrivateKey({ privateKey, protocol, testnet }: {
        privateKey: string;
        protocol: Protocol;
        testnet?: boolean | undefined;
    }): Promise<Wallet>;
    /**
     * Generate wallet address deriving from the xpub
     * @param {object} input
     * @param {string} input.xpub extended public key string
     * @param {Protocol} input.protocol blockchain protocol
     * @param {boolean=} input.testnet testnet
     * @param {number=} input.address address index number to derive the wallet address from
     */
    generateWalletAddressFromXpub({ xpub, protocol, testnet, address }: {
        xpub: string;
        protocol: Protocol;
        testnet?: boolean | undefined;
        address?: number | undefined;
    }): Promise<any>;
    generateBitcoinWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateEthereumWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateBscWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateCeloWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateStellarWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateRippleWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateHathorWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateCardanoWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    generateAvalancheWallet({ mnemonic, derivation, testnet }: {
        mnemonic: any;
        derivation: any;
        testnet: any;
    }): Promise<Wallet>;
    /**
     * Get wallet information from blockchain
     *
     * @param {object} input
     * @param {string} input.address wallet address or public key
     * @param {Protocol} input.protocol blockchain protocol
     * @param {string[]=} input.tokenAddresses array of token addresses to fetch balance from
     * @returns {Promise<WalletInfoResponse>}
     */
    getWalletInfo(input: {
        address: string;
        protocol: Protocol;
        tokenAddresses?: string[] | undefined;
    }): Promise<WalletInfoResponse>;
}
import Interface = require("./interface");
import { Protocol } from "../../../services/blockchain/constants";
import { Wallet } from "../entity";
import { WalletInfoResponse } from "../entity";
