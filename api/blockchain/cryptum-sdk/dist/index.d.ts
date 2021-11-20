export = CryptumSDK;
/**
 * @typedef {object} Config
 * @property {string} environment
 * @property {string} apiKey
 */
declare class CryptumSDK {
    /**
     *
     * @param {Config} config
     */
    constructor(config: Config);
    config: Config;
    /**
     * Method to get an controller to create, get and delete webhooks
     *
     * @returns an WebhooksController instance class to manipulate
     */
    getWebhooksController(): WebhooksController;
    /**
     * Method to get a controller to manipulate wallets
     *
     * @returns WalletController instance
     */
    getWalletController(): WalletController;
    /**
     * Method to get a controller to manipulate transactions
     *
     * @returns TransactionController instance
     */
    getTransactionController(): TransactionController;
    /**
     * Method to get a controller to manipulate transactions
     * @param {Object} args
     * @param {Protocol} args.protocol
     * @returns TransactionController instance
     */
    getStakingController({ protocol }: {
        protocol: Protocol;
    }): import("./src/features/staking/controller/celo");
    /**
     * Method to get a controller to manipulate prices
     *
     * @returns PricesController instance
     */
    getPricesController(): PricesController;
    /**
     * Method to get a controller to manipulate swap
     *
     * @returns PricesController instance
     */
    getSwapController(): SwapController;
}
declare namespace CryptumSDK {
    export { Config };
}
type Config = {
    environment: string;
    apiKey: string;
};
import WebhooksController = require("./src/features/webhooks/controller");
import WalletController = require("./src/features/wallet/controller");
import TransactionController = require("./src/features/transaction/controller");
import { Protocol } from "./src/services/blockchain/constants";
import PricesController = require("./src/features/prices/controller");
import SwapController = require("./src/features/swap/controller");
