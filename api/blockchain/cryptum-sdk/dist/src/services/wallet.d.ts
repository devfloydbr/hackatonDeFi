export function getBitcoinAddressFromPrivateKey(privateKey: string, testnet?: boolean | undefined): string;
export function deriveBitcoinAddressFromXpub(xpub: string, testnet: boolean, { address }?: object | undefined): string;
export function deriveBitcoinWalletFromDerivationPath(mnemonic: string, testnet: boolean, { account, change, address }?: object | undefined): Promise<{
    address: string;
    privateKey: string;
    publicKey: string;
    xpub: string;
}>;
export function privateKeyToEthAccount(privateKey: string): object;
export function getEthereumAddressFromPrivateKey(privateKey: string): string;
export function deriveEthereumWalletFromDerivationPath(mnemonic: string, { account, change, address }?: object | undefined): Promise<{
    address: string;
    privateKey: string;
    publicKey: string;
    xpub: string;
}>;
export function deriveEthereumAddressFromXpub(xpub: string, { address }?: object | undefined): Promise<string>;
export function getBscAddressFromPrivateKey(privateKey: any): string;
export function getCeloAddressFromPrivateKey(privateKey: any): string;
export function deriveCeloWalletFromDerivationPath(mnemonic: string, { account, change, address }?: number): Promise<{
    address: string;
    privateKey: string;
    publicKey: string;
    xpub: string;
}>;
export function deriveCeloAddressFromXpub(xpub: any, { address }?: {
    address?: number;
}): Promise<string>;
export function deriveBscAddressFromXpub(xpub: any, { address }?: {
    address?: number;
}): Promise<string>;
export function deriveStellarWalletFromDerivationPath(mnemonic: string, { account }?: object | undefined): {
    publicKey: any;
    privateKey: any;
};
export function getStellarPublicKeyFromPrivateKey(privateKey: any): string;
export function deriveRippleWalletFromDerivationPath(mnemonic: string, { account }?: number): {
    address: string;
    publicKey: string;
    privateKey: string;
};
export function getRippleAddressFromPrivateKey(privateKey: any): string;
export function deriveHathorWalletFromDerivationPath(mnemonic: string, testnet: boolean, { account, address }?: object): Promise<{
    address: any;
    publicKey: any;
    privateKey: any;
    xpub: any;
}>;
export function getHathorAddressFromPrivateKey(privateKey: any, testnet: any): any;
export function deriveHathorAddressFromXpub(xpub: any, testnet: any, { address }?: {
    address?: number;
}): any;
export function deriveCardanoWalletFromDerivationPath(mnemonic: string, testnet?: boolean | undefined, { account, address }?: object): Promise<{
    address: string;
    xpub: string;
    publicKey: {
        spendingPublicKey: string;
        stakingPublicKey: string;
    };
    privateKey: {
        spendingPrivateKey: string;
        stakingPrivateKey: string;
    };
}>;
export function deriveCardanoAddressFromXpub(xpub: string, testnet: boolean): Promise<string>;
export function getCardanoAddressFromPrivateKey(privateKey: any, testnet?: boolean): string;
export function getAvalancheAddressFromPrivateKey(privateKey: string): object;
export function deriveAvalancheWalletFromDerivationPath(mnemonic: string, { account, change, address }?: object | undefined): Promise<{
    address: string;
    privateKey: string;
    publicKey: string;
    xpub: string;
}>;
export function deriveAvalancheAddressFromXpub(xpub: any, { address }?: {
    address?: number;
}): Promise<string>;
