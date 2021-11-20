"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WalletsController_1 = __importDefault(require("./controllers/WalletsController"));
const NftsController_1 = __importDefault(require("./controllers/NftsController"));
const ContractsController_1 = __importDefault(require("./controllers/ContractsController"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    return res.json({ api: 'API TRANSFER' });
});
// WALLET
routes.post('/wallet', WalletsController_1.default.create);
routes.get('/wallet/:address/:protocol', WalletsController_1.default.read);
// NFT
routes.post('/nft', NftsController_1.default.create);
routes.post('/mint', NftsController_1.default.mint);
routes.post('/safeTransfer', NftsController_1.default.safeTransfer);
routes.get('/name/:protocol/:address/:contract', NftsController_1.default.name);
routes.get('/symbol/:protocol/:address/:contract', NftsController_1.default.symbol);
routes.get('/tokenURI/:protocol/:address/:contract/:tokenId', NftsController_1.default.tokenURI);
// CONTRACT
routes.get('/transfersByAddress/:address/:contract/:page/:offset', ContractsController_1.default.transfersByAddress);
routes.get('/tokenBalance/:address/:contract', ContractsController_1.default.tokenBalance);
exports.default = routes;
