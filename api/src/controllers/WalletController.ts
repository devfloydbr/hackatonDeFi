import { Wallet } from 'cryptum-sdk/dist/src/features/wallet/entity'
import { Request, Response } from 'express'

import { cryptumSDK } from '../services/cryptum'

interface WalletRequest {
  protocol: 
    'BITCOIN' | 
    'ETHEREUM' | 
    'BSC' | 
    'CELO' | 
    'STELLAR' |
    'RIPPLE' |
    'HATHOR' |
    'CARDANO' |
    'AVAXCCHAIN';
  mnemonic?: string;
  derivation?: {
    account: number;
    change: number;
    address: number; 
  }
}

const walletController = cryptumSDK.getWalletController()

export default {
  async mnemonic(req: Request, res: Response) {  
    const mnemonic = walletController.generateRandomMnemonic()
  
    return res.json({ mnemonic });
  },

  async createWallet(req: Request, res: Response) {
    const data: WalletRequest = req.body

    if (!data.mnemonic) {
      const wallet = await walletController.generateWallet({ protocol: data.protocol })

      return res.json({ wallet });
    } 

    const wallet = await walletController.generateWallet({
      protocol: data.protocol,
      mnemonic: data.mnemonic,
      derivation: data.derivation
    }) 

    return res.json({ wallet });
  }
}

