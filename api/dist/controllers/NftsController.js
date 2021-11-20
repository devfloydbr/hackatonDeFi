"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cryptum_1 = require("../services/cryptum");
const txController = cryptum_1.cryptumSDK.getTransactionController();
exports.default = {
    safeTransfer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { wallet, toAddress, contract, tokenId } = req.body;
            try {
                const transaction = yield txController.createSmartContractTransaction({
                    wallet,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'tokenId',
                                    type: 'uint256'
                                }
                            ],
                            name: 'safeTransfer',
                            outputs: [],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                    ],
                    method: 'safeTransfer',
                    params: [toAddress, tokenId],
                    protocol: 'CELO'
                });
                const { hash } = yield txController.sendTransaction(transaction);
                return res.json({ hash });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { wallet, protocol, name, symbol } = req.body;
            try {
                const transaction = yield txController.createTokenDeployTransaction({
                    wallet,
                    tokenType: 'ERC721',
                    params: [name, symbol],
                    protocol: protocol,
                    testnet: true
                });
                const { hash } = yield txController.sendTransaction(transaction);
                return res.json({ hash });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    mint(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { wallet, address, protocol, contract, uri } = req.body;
            try {
                let { result: totalSupply } = yield txController.callSmartContractMethod({
                    from: wallet.address,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        }
                    ],
                    method: 'totalSupply',
                    params: [],
                    protocol
                });
                const transaction = yield txController.createSmartContractTransaction({
                    wallet,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'tokenId',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'string',
                                    name: 'uri',
                                    type: 'string'
                                }
                            ],
                            name: 'mint',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        }
                    ],
                    method: 'mint',
                    params: [address, totalSupply++, uri],
                    protocol
                });
                const { hash } = yield txController.sendTransaction(transaction);
                return res.json({ hash });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    name(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, contract, protocol } = req.params;
            try {
                const { result: name } = yield txController.callSmartContractMethod({
                    from: address,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [],
                            name: 'name',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                    ],
                    method: 'name',
                    params: [],
                    protocol
                });
                return res.json({ name });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    symbol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, contract, protocol } = req.params;
            try {
                const { result: symbol } = yield txController.callSmartContractMethod({
                    from: address,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [],
                            name: 'symbol',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                    ],
                    method: 'symbol',
                    params: [],
                    protocol
                });
                return res.json({ symbol });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    tokenURI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, contract, tokenId, protocol } = req.params;
            try {
                const { result: tokenURI } = yield txController.callSmartContractMethod({
                    from: address,
                    contractAddress: contract,
                    contractAbi: [
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tokenId',
                                    type: 'uint256'
                                }
                            ],
                            name: 'tokenURI',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                    ],
                    method: 'tokenURI',
                    params: [tokenId],
                    protocol
                });
                return res.json({ tokenURI });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    }
};
