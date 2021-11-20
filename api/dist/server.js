"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
const httpServer = (0, http_1.createServer)(app);
httpServer.listen(process.env.PORT || 3333, () => {
    console.log('Server started on port 3333! 🚀');
});
