export function buildCeloTransferTransaction({ fromPrivateKey, nonce, tokenSymbol, contractAddress, amount, destination, fee, feeCurrency, memo, testnet, }: {
    fromPrivateKey: any;
    nonce: any;
    tokenSymbol: any;
    contractAddress: any;
    amount: any;
    destination: any;
    fee: any;
    feeCurrency?: any;
    memo?: any;
    testnet?: boolean;
}): Promise<string>;
export function buildCeloSmartContractTransaction({ fromPrivateKey, nonce, contractAddress, contractAbi, method, params, value, fee, feeCurrency, testnet, }: {
    fromPrivateKey: any;
    nonce: any;
    contractAddress: any;
    contractAbi: any;
    method: any;
    params: any;
    value: any;
    fee: any;
    feeCurrency: any;
    testnet: any;
}): Promise<string>;
export function buildCeloSmartContractDeployTransaction({ fromPrivateKey, contractName, source, nonce, fee, feeCurrency, testnet, config, tokenType, params, }: {
    fromPrivateKey: any;
    contractName: any;
    source: any;
    nonce: any;
    fee: any;
    feeCurrency: any;
    testnet: any;
    config: any;
    tokenType: any;
    params: any;
}): Promise<string>;
