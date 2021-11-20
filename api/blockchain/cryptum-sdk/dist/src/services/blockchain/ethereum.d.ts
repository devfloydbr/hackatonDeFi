export function buildEthereumTransferTransaction({ fromPrivateKey, nonce, tokenSymbol, contractAddress, amount, destination, fee, }: {
    fromPrivateKey: any;
    nonce: any;
    tokenSymbol: any;
    contractAddress: any;
    amount: any;
    destination: any;
    fee: any;
}): Promise<string>;
export function buildBscTransferTransaction({ fromPrivateKey, nonce, tokenSymbol, contractAddress, amount, destination, fee, testnet, }: {
    fromPrivateKey: any;
    nonce: any;
    tokenSymbol: any;
    contractAddress: any;
    amount: any;
    destination: any;
    fee: any;
    testnet: any;
}): Promise<string>;
export function buildEthereumSmartContractTransaction({ fromPrivateKey, nonce, contractAddress, contractAbi, method, params, value, fee, testnet, protocol, }: {
    fromPrivateKey: any;
    nonce: any;
    contractAddress: any;
    contractAbi: any;
    method: any;
    params: any;
    value: any;
    fee: any;
    testnet: any;
    protocol: any;
}): Promise<string>;
export function buildEthereumSmartContractDeployTransaction({ fromPrivateKey, nonce, contractName, source, fee, testnet, protocol, tokenType, config, params, }: {
    fromPrivateKey: any;
    nonce: any;
    contractName: any;
    source: any;
    fee: any;
    testnet: any;
    protocol: any;
    tokenType: any;
    config: any;
    params: any;
}): Promise<string>;
