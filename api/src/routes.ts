import express, { Request, Response } from 'express';

import WalletController from './controllers/WalletController'

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ api: 'API TRANSFER' });
})

routes.get('/mnemonic', WalletController.mnemonic)

routes.post('/wallet', WalletController.createWallet)

export default routes;