import express, { Request, Response } from 'express';

import { cryptumSDK } from './services/cryptum'

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
  return res.json({ api: 'API TRANSFER' });
})

routes.get('/teste', (req: Request, res: Response) => {
  const walletController = cryptumSDK.getWalletController()

  const mnemonic = walletController.generateRandomMnemonic()

  return res.json({ api: mnemonic });
})

export default routes;