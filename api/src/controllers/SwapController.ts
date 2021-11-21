import { Request, Response } from 'express'
import { cryptumSDK } from '../services/cryptum'

const swapController = cryptumSDK.getSwapController()

export default {
  async createSwap(req: Request, res: Response) {
    swapController.getSupportedCurrencies().then((curencies) => {
      console.log(curencies);
    })
  }
}