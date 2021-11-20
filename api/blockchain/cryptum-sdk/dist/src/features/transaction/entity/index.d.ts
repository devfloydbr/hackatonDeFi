export type Fee = object | string;
export type HathorTokenTransactionFromWalletInput = {
    /**
     * token transaction type
     */
    type: TransactionType;
    /**
     * wallet to create the token with
     */
    wallet: import('../../wallet/entity').Wallet;
    /**
     * token name
     */
    tokenName?: string | undefined;
    /**
     * token symbol
     */
    tokenSymbol?: string | undefined;
    /**
     * token uid
     */
    tokenUid?: string | undefined;
    /**
     * token amount to mint
     */
    amount: string;
    /**
     * destination address to receive the tokens
     */
    address: string;
    /**
     * change address
     */
    changeAddress?: string | undefined;
    /**
     * mint authority address
     */
    mintAuthorityAddress?: string | undefined;
    /**
     * melt authority address
     */
    meltAuthorityAddress?: string | undefined;
    testnet?: boolean | undefined;
};
export type HathorTokenTransactionFromUTXOInput = {
    /**
     * token transaction type
     */
    type: TransactionType;
    /**
     * UTXOs to create the token with
     */
    inputs: Input[];
    /**
     * token name
     */
    tokenName: string;
    /**
     * token symbol
     */
    tokenSymbol: string;
    /**
     * token amount to mint
     */
    amount: string;
    /**
     * destination address to receive the tokens
     */
    address: string;
    /**
     * change address
     */
    changeAddress?: string | undefined;
    /**
     * mint authority address
     */
    mintAuthorityAddress?: string | undefined;
    /**
     * melt authority address
     */
    meltAuthorityAddress?: string | undefined;
    testnet?: boolean | undefined;
};
/**
 * Transaction type
 */
export type TransactionType = string;
export namespace TransactionType {
    const TRANSFER: string;
    const CALL_CONTRACT_METHOD: string;
    const DEPLOY_CONTRACT: string;
    const DEPLOY_ERC20: string;
    const DEPLOY_ERC721: string;
    const DEPLOY_ERC1155: string;
    const CHANGE_TRUST: string;
    const HATHOR_TOKEN_CREATION: string;
    const HATHOR_TOKEN_MINT: string;
    const HATHOR_TOKEN_MELT: string;
}
/**
 * @typedef {object | string} Fee
 * @property {number} gas
 * @property {string} gasPrice
 */
export class SignedTransaction {
    /**
     * Creates an instance of SignedTransaction
     *
     * @param {object} signedTxArgs
     * @param {string} signedTxArgs.signedTx signed transaction data
     * @param {Protocol} signedTxArgs.protocol blockchain protocol
     * @param {TransactionType} signedTxArgs.type transaction type
     */
    constructor({ signedTx, protocol, type }: {
        signedTx: string;
        protocol: any;
        type: TransactionType;
    });
    signedTx: string;
    protocol: any;
    type: string;
}
export class TransactionResponse {
    /**
     * Creates an instance of TransactionResponse
     *
     * @param {object} response
     * @param {string} response.hash transaction hash
     */
    constructor({ hash }: {
        hash: string;
    });
    hash: string;
}
export class FeeResponse {
    constructor({ estimateValue, currency, gas, gasPrice, chainId }: {
        estimateValue: any;
        currency: any;
        gas: any;
        gasPrice: any;
        chainId: any;
    });
    estimateValue: any;
    currency: any;
    gas: any;
    gasPrice: any;
    chainId: any;
}
export class UTXO {
    constructor({ value, txHash, index, height, token }: {
        value: any;
        txHash: any;
        index: any;
        height: any;
        token: any;
    });
    value: any;
    txHash: any;
    index: any;
    height: any;
    token: any;
}
export class Input {
    constructor({ txHash, index, privateKey, value, blockhash, hex }: {
        txHash: any;
        index: any;
        privateKey: any;
        value: any;
        blockhash: any;
        hex: any;
    });
    txHash: any;
    index: any;
    privateKey: any;
    hex: any;
    value: any;
    blockhash: any;
}
export class Output {
    /**
     *
     * @param {object} output
     * @param {string} output.address
     * @param {string} output.amount
     * @param {string=} output.token
     */
    constructor(output: {
        address: string;
        amount: string;
        token?: string | undefined;
    });
    address: string;
    amount: string;
    token: string;
}
export class StellarTrustlineTransactionInput extends TrustlineTransactionInput {
    constructor(args: any);
}
export class RippleTrustlineTransactionInput extends TrustlineTransactionInput {
    constructor(args: any);
}
export class EthereumTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of EthereumTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.tokenSymbol
     * @param {string} args.amount
     * @param {string} args.destination
     * @param {string=} args.memo
     * @param {Fee=} args.fee
     * @param {boolean} args.testnet
     * @param {string=} args.contractAddress
     */
    constructor({ tokenSymbol, contractAddress, ...args }: {
        wallet: import('../../wallet/entity').Wallet;
        tokenSymbol: string;
        amount: string;
        destination: string;
        memo?: string | undefined;
        fee?: Fee | undefined;
        testnet: boolean;
        contractAddress?: string | undefined;
    });
    tokenSymbol: string;
    contractAddress: string;
}
export class CeloTransferTransactionInput extends EthereumTransferTransactionInput {
    /**
     * Creates an instance of CeloTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.tokenSymbol
     * @param {string} args.amount
     * @param {string} args.destination
     * @param {string=} args.memo
     * @param {Fee=} args.fee
     * @param {boolean} args.testnet
     * @param {string=} args.contractAddress
     * @param {string=} args.feeCurrency
     */
    constructor({ feeCurrency, ...args }: {
        wallet: import('../../wallet/entity').Wallet;
        tokenSymbol: string;
        amount: string;
        destination: string;
        memo?: string | undefined;
        fee?: Fee | undefined;
        testnet: boolean;
        contractAddress?: string | undefined;
        feeCurrency?: string | undefined;
    });
    feeCurrency: string;
}
export class StellarTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of StellarTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.assetSymbol asset symbol to be transferred
     * @param {string} args.issuer issuer account to identify the asset to be transferred
     * @param {string} args.amount amount to be transferred
     * @param {string} args.destination account to be transferred to
     * @param {string=} args.memo
     * @param {Fee=} args.fee fee in stroops
     * @param {boolean=} args.createAccount true if the destination account does not exist yet
     * @param {boolean=} args.testnet
     */
    constructor({ assetSymbol, createAccount, issuer, ...args }: {
        wallet: import('../../wallet/entity').Wallet;
        assetSymbol: string;
        issuer: string;
        amount: string;
        destination: string;
        memo?: string | undefined;
        fee?: Fee | undefined;
        createAccount?: boolean | undefined;
        testnet?: boolean | undefined;
    });
    assetSymbol: string;
    createAccount: boolean;
    issuer: string;
}
export class RippleTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of CeloTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.assetSymbol asset symbol to be transferred
     * @param {string} args.issuer issuer account to identify the asset to be transferred
     * @param {string} args.amount amount to be transferred
     * @param {string} args.destination account to be transferred to
     * @param {Fee=} args.fee fee in drops
     * @param {string=} args.memo
     * @param {boolean=} args.testnet
     */
    constructor({ assetSymbol, issuer, ...args }: {
        wallet: import('../../wallet/entity').Wallet;
        assetSymbol: string;
        issuer: string;
        amount: string;
        destination: string;
        fee?: Fee | undefined;
        memo?: string | undefined;
        testnet?: boolean | undefined;
    });
    assetSymbol: string;
    issuer: string;
}
export class BitcoinTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of BitcoinTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet=} args.wallet wallet to transfer from
     * @param {Array<Input>=} args.inputs inputs to transfer from
     * @param {Array<Output>} args.outputs outputs to transfer to
     * @param {Fee=} args.fee fee per byte in satoshi
     * @param {boolean} args.testnet
     */
    constructor({ outputs, inputs, ...args }: {
        wallet?: import('../../wallet/entity').Wallet | undefined;
        inputs?: Array<Input> | undefined;
        outputs: Array<Output>;
        fee?: Fee | undefined;
        testnet: boolean;
    });
    outputs: Output[];
    inputs: Input[];
}
export class SmartContractCallTransactionInput {
    /**
     * Creates an instance of SmartContractCallTransactionInput.
     *
     * @param {object} args
     * @param {string=} args.from
     * @param {import('../../wallet/entity').Wallet=} args.wallet wallet to transfer from
     * @param {string} args.contractAddress
     * @param {Array<object>} args.contractAbi
     * @param {string} args.method
     * @param {Array} args.params
     * @param {string} args.protocol
     */
    constructor({ from, contractAddress, contractAbi, method, params, protocol }: {
        from?: string | undefined;
        wallet?: import("../../wallet/entity").Wallet;
        contractAddress: string;
        contractAbi: Array<object>;
        method: string;
        params: any[];
        protocol: string;
    });
    from?: string;
    wallet?: import("../../wallet/entity").Wallet;
    contractAddress: string;
    contractAbi: any[];
    method: string;
    params: any[];
    protocol: string;
}
export class SmartContractCallResponse {
    constructor({ result }: {
        result: any;
    });
    result: any;
}
export class SmartContractDeployTransactionInput {
    /**
     * Creates an instance of SmartContractDeployTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.method
     * @param {string} args.contractName
     * @param {Array} args.params
     * @param {string} args.source
     * @param {Fee=} args.fee
     * @param {boolean} args.testnet
     */
    constructor({ wallet, contractName, params, source, fee, testnet }: {
        wallet: import('../../wallet/entity').Wallet;
        method: string;
        contractName: string;
        params: any[];
        source: string;
        fee?: Fee | undefined;
        testnet: boolean;
    });
    wallet: import("../../wallet/entity").Wallet;
    contractName: string;
    params: any[];
    source: string;
    fee: any;
    testnet: boolean;
}
export class TokenDeployTransactionInput {
    /**
     * Creates an instance of TokenDeployTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {Array} args.params
     * @param {string} args.tokenType
     * @param {Fee=} args.fee
     * @param {Protocol} args.protocol
     * @param {boolean} args.testnet
     */
    constructor({ wallet, tokenType, params, fee, protocol, testnet }: {
        wallet: import('../../wallet/entity').Wallet;
        params: any[];
        tokenType: string;
        fee?: Fee | undefined;
        protocol: any;
        testnet: boolean;
    });
    wallet: import("../../wallet/entity").Wallet;
    tokenType: string;
    params: any[];
    protocol: any;
    fee?: any;
    testnet: boolean;
}
export class HathorTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of HathorTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet=} args.wallet wallet to transfer from
     * @param {Array<Input>=} args.inputs inputs to transfer from
     * @param {Array<Output>} args.outputs outputs to transfer to
     * @param {Array<Output>} args.tokens outputs to transfer to
     * @param {boolean} args.testnet
     */
    constructor({ outputs, inputs, ...args }: {
        wallet?: import('../../wallet/entity').Wallet | undefined;
        inputs?: Array<Input> | undefined;
        outputs: Array<Output>;
        tokens: Array<Output>;
        testnet: boolean;
    });
    outputs: Output[];
    inputs: Input[];
}
export class CardanoTransferTransactionInput extends TransferTransactionInput {
    /**
     * Creates an instance of CardanoTransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet=} args.wallet wallet to transfer from
     * @param {Array<Input>=} args.inputs inputs to transfer from
     * @param {Array<Output>} args.outputs outputs to transfer to
     * @param {Array<Output>} args.tokens outputs to transfer to
     * @param {boolean} args.testnet
     */
    constructor({ outputs, inputs, ...args }: {
        wallet?: import('../../wallet/entity').Wallet | undefined;
        inputs?: Array<Input> | undefined;
        outputs: Array<Output>;
        tokens: Array<Output>;
        testnet: boolean;
    });
    outputs: Output[];
    inputs: Input[];
}
declare class TrustlineTransactionInput {
    /**
     * Creates an instance of TrustlineTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.assetSymbol
     * @param {string} args.issuer issuer account for the trustline
     * @param {string=} args.limit max number that the trustline can allow
     * @param {string=} args.memo
     * @param {Fee=} args.fee fee in stroops (stellar) or drops (xrp)
     * @param {boolean} args.testnet
     */
    constructor({ wallet, assetSymbol, issuer, limit, memo, fee, testnet }: {
        wallet: import('../../wallet/entity').Wallet;
        assetSymbol: string;
        issuer: string;
        limit?: string | undefined;
        memo?: string | undefined;
        fee?: Fee | undefined;
        testnet: boolean;
    });
    wallet: import("../../wallet/entity").Wallet;
    limit: string;
    issuer: string;
    assetSymbol: string;
    memo: string;
    fee: any;
    testnet: boolean;
}
declare class TransferTransactionInput {
    /**
     * Creates an instance of TransferTransactionInput.
     *
     * @param {object} args
     * @param {import('../../wallet/entity').Wallet} args.wallet
     * @param {string} args.amount
     * @param {string} args.destination
     * @param {string=} args.memo
     * @param {Fee=} args.fee
     * @param {boolean} args.testnet
     */
    constructor({ wallet, amount, destination, memo, fee, testnet }: {
        wallet: import('../../wallet/entity').Wallet;
        amount: string;
        destination: string;
        memo?: string | undefined;
        fee?: Fee | undefined;
        testnet: boolean;
    });
    wallet: import("../../wallet/entity").Wallet;
    amount: string;
    destination: string;
    memo: string;
    fee: any;
    testnet: boolean;
}
export {};
