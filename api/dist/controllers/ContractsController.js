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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alfajoresBlockScoutAPI_1 = __importDefault(require("../services/alfajoresBlockScoutAPI"));
exports.default = {
    tokenBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, contract } = req.params;
            const url = `?module=account&action=tokenbalance&contractaddress=${contract}&address=${address}`;
            try {
                const response = yield alfajoresBlockScoutAPI_1.default.get(url);
                return res.json({
                    address,
                    contract,
                    total: Number(response.data.result)
                });
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
    transfersByAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { address, contract, page, offset } = req.params;
            const url = `?module=account&action=tokentx&address=${address}&contractaddress=${contract}&page=${page}&offset=${offset}`;
            try {
                const response = yield alfajoresBlockScoutAPI_1.default.get(url);
                return res.json(response.data.result);
            }
            catch (error) {
                return res.json({ error: error.message });
            }
        });
    },
};
