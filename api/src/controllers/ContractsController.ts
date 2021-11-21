import { Request, Response } from 'express'
import { cryptumSDK } from '../services/cryptum'
import alfajoresBlockScoutAPI from '../services/alfajoresBlockScoutAPI'

const txController = cryptumSDK.getTransactionController()

export default {
  async tokenBalance(req: Request, res: Response) {
    const { address, contract } = req.params

    const url = `?module=account&action=tokenbalance&contractaddress=${contract}&address=${address}`
    
    try {
      const response = await alfajoresBlockScoutAPI.get(url)
      
      return res.json({ 
        address,
        contract,
        total: Number(response.data.result)
      })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
    
  },
  
  async transfersByAddress(req: Request, res: Response) {
    const { address, contract, page, offset } = req.params

    const url = `?module=account&action=tokentx&address=${address}&contractaddress=${contract}&page=${page}&offset=${offset}`
    
    try {
      const response = await alfajoresBlockScoutAPI.get(url)
      
      return res.json(response.data.result)
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },

  async transferToken(req: Request, res: Response) {
    const { wallet, address, contract, amount, protocol } = req.body

    try {
      const transaction = await txController.createSmartContractTransaction({
        wallet,
        contractAddress: contract,   
        contractAbi: [
          {
            inputs: [
              {
                internalType: 'address',
                name: 'recipient',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
              }
            ],
            name: 'transfer',
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
        method: 'transfer',
        params: [address, amount],
        protocol
      })  
      
      const { hash } = await txController.sendTransaction(transaction)
      
      return res.json({ hash })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }
}