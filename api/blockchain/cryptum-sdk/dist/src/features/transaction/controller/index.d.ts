export = Controller;
declare class Controller extends Interface {
    /**
     * Method to send an transaction to Cryptum
     *
     * @param {SignedTransaction} transaction object with all transaction data
     * @param {Protocol} transaction.protocol
     * @returns {Promise<TransactionResponse>}
     */
    sendTransaction(transaction: SignedTransaction): Promise<TransactionResponse>;
    /**
     * Method to get fee info
     *
     * @param {object} input
     * @param {string} input.type
     * @param {string=} input.from
     * @param {string=} input.destination
     * @param {string=} input.assetSymbol
     * @param {string=} input.contractAddress
     * @param {string=} input.method
     * @param {Array=} input.params
     * @param {Protocol} input.protocol
     * @param {string} input.amount
     * @param {string=} input.contractName
     * @param {string=} input.source
     * @param {string=} input.feeCurrency
     */
    getFee({ type, from, amount, destination, contractAddress, contractAbi, method, params, protocol, contractName, source, feeCurrency, tokenType, }: {
        type: string;
        from?: string | undefined;
        destination?: string | undefined;
        assetSymbol?: string | undefined;
        contractAddress?: string | undefined;
        method?: string | undefined;
        params?: any[] | undefined;
        protocol: Protocol;
        amount: string;
        contractName?: string | undefined;
        source?: string | undefined;
        feeCurrency?: string | undefined;
    }): Promise<FeeResponse>;
    /**
     * Get UTXOs from address
     *
     * @param {object} input
     * @param {string} input.address
     * @param {Protocol} input.protocol
     * @returns {Promise<Array<import('../entity').UTXOResponse>>}
     */
    getUTXOs({ address, protocol }: {
        address: string;
        protocol: Protocol;
    }): Promise<Array<import('../entity').UTXOResponse>>;
    /**
     * Get transaction by hash (tx id)
     *
     * @param {object} input
     * @param {string} input.hash transaction hash
     * @param {Protocol} input.protocol blockchain protocol
     */
    getTransactionByHash({ hash, protocol }: {
        hash: string;
        protocol: Protocol;
    }): Promise<any>;
    /**
     * Get block info
     *
     * @param {object} input
     * @param {string} input.block block number or hash
     * @param {Protocol} input.protocol blockchain protocol
     */
    getBlock({ block, protocol }: {
        block: string;
        protocol: Protocol;
    }): Promise<any>;
    /**
     * Create stellar trustline transaction
     *
     * @param {import('../entity').StellarTrustlineTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createStellarTrustlineTransaction(input: import('../entity').StellarTrustlineTransactionInput): Promise<SignedTransaction>;
    /**
     * Create ripple trustline transaction
     *
     * @param {import('../entity').RippleTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createRippleTrustlineTransaction(input: import('../entity').RippleTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create stellar transfer transaction
     *
     * @param {import('../entity').StellarTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createStellarTransferTransaction(input: import('../entity').StellarTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create ripple transfer transaction
     *
     * @param {import('../entity').RippleTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createRippleTransferTransaction(input: import('../entity').RippleTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create celo transfer transaction
     *
     * @param {import('../entity').CeloTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createCeloTransferTransaction(input: import('../entity').CeloTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create ethereum transfer transaction
     *
     * @param {import('../entity').EthereumTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createEthereumTransferTransaction(input: import('../entity').EthereumTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create bsc transfer transaction
     *
     * @param {EthereumTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createBscTransferTransaction(input: any): Promise<SignedTransaction>;
    /**
     * Create bitcoin transfer transaction
     *
     * @param {import('../entity').BitcoinTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>} signed transaction data
     */
    createBitcoinTransferTransaction(input: import('../entity').BitcoinTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create call transaction to smart contract
     *
     * @param {import('../entity').SmartContractCallTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createSmartContractTransaction(input: import('../entity').SmartContractCallTransactionInput): Promise<SignedTransaction>;
    /**
     * Call a smart contract method
     * @param {import('../entity').SmartContractCallTransactionInput} input
     * @returns {Promise<SmartContractCallResponse>}
     */
    callSmartContractMethod(input: import('../entity').SmartContractCallTransactionInput): Promise<SmartContractCallResponse>;
    _getFeeInfo({ wallet, type, destination, amount, contractAddress, contractAbi, method, params, fee, feeCurrency, protocol, contractName, source, tokenType, }: {
        wallet: any;
        type: any;
        destination: any;
        amount: any;
        contractAddress: any;
        contractAbi: any;
        method: any;
        params: any;
        fee: any;
        feeCurrency: any;
        protocol: any;
        contractName: any;
        source: any;
        tokenType: any;
    }): Promise<{
        info: import("../../wallet/entity").WalletInfoResponse;
        networkFee: FeeResponse;
    }>;
    /**
     * Create call transaction to smart contract deploy
     *
     * @param {import('../entity').SmartContractDeployTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createSmartContractDeployTransaction(input: import('../entity').SmartContractDeployTransactionInput): Promise<SignedTransaction>;
    /**
     * Create call transaction to token/asset issue
     *
     * @param {import('../entity').TokenDeployTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createTokenDeployTransaction(input: import('../entity').TokenDeployTransactionInput): Promise<SignedTransaction>;
    /**
     * Create transfer tokens transaction in Hathor blockchain
     * @param {import('../entity').HathorTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createHathorTransferTransactionFromWallet(input: import('../entity').HathorTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create transfer tokens transaction in Hathor blockchain
     * @param {import('../entity').HathorTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createHathorTransferTransactionFromUTXO(input: import('../entity').HathorTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create Hathor token transaction using wallet
     * @param {import('../entity').HathorTokenTransactionFromWalletInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createHathorTokenTransactionFromWallet(input: import('../entity').HathorTokenTransactionFromWalletInput): Promise<SignedTransaction>;
    /**
     * Create Hathor token transaction using UTXO
     * @param {import('../entity').HathorTokenTransactionFromUTXOInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createHathorTokenTransactionFromUTXO(input: import('../entity').HathorTokenTransactionFromUTXOInput): Promise<SignedTransaction>;
    /**
     * Create transfer tokens transaction in Cardano blockchain
     * @param {import('../entity').CardanoTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createCardanoTransferTransactionFromWallet(input: import('../entity').CardanoTransferTransactionInput): Promise<SignedTransaction>;
    /**
     * Create transfer tokens transaction in Cardano blockchain
     * @param {import('../entity').CardanoTransferTransactionInput} input
     * @returns {Promise<SignedTransaction>}
     */
    createCardanoTransferTransactionFromUTXO(input: import('../entity').CardanoTransferTransactionInput): Promise<SignedTransaction>;
}
import Interface = require("./interface");
import { SignedTransaction } from "../entity";
import { TransactionResponse } from "../entity";
import { Protocol } from "../../../services/blockchain/constants";
import { FeeResponse } from "../entity";
import { SmartContractCallResponse } from "../entity";
