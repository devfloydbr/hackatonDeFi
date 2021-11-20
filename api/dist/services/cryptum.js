"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptumSDK = void 0;
const dist_1 = __importDefault(require("../../blockchain/cryptum-sdk/dist"));
exports.cryptumSDK = new dist_1.default({
    environment: 'development',
    apiKey: String(process.env.CRYPTUM_API_KEY),
});
