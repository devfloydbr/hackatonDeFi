import { Request, Response } from 'express'
import { cryptumSDK } from '../services/cryptum'
import alfajoresBlockScoutAPI from '../services/alfajoresBlockScoutAPI'

const txController = cryptumSDK.getTransactionController() 

export default {  
  async safeTransfer(req: Request, res: Response) { 
    const { wallet, toAddress, contract, tokenId } = req.body
    
    try {
      const transaction = await txController.createSmartContractTransaction({
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
      })  
      
      const { hash } = await txController.sendTransaction(transaction)
      
      return res.json({ hash })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },
  
  async create(req: Request, res: Response) { 
    const { wallet, protocol, name, symbol } = req.body
    
    try {   
      const transaction = await txController.createTokenDeployTransaction({
        wallet,        
        tokenType: 'ERC721',
        params: [name, symbol],        
        protocol: protocol,
        testnet: true
      })
      
      const { hash } = await txController.sendTransaction(transaction)  
      
      return res.json({ hash })
      
    } catch (error: any) {
      return res.json({ error: error.message })
    }    
  },
  
  async mint(req: Request, res: Response) {
    const { wallet, address, protocol, contract, uri } = req.body;    
    
    try {   
      let { result: totalSupply } = await txController.callSmartContractMethod({
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
      })   
      
      const transaction = await txController.createSmartContractTransaction({
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
      })  
      
      const { hash } = await txController.sendTransaction(transaction)
      
      return res.json({ hash })
      
    } catch (error: any) {
      return res.json({ error: error.message })
    }    
  },

  async name(req: Request, res: Response) {
    const { address, contract, protocol } = req.params
    
    try {
      const { result: name } = await txController.callSmartContractMethod({
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
      }) 
      
      return res.json({ name })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },

  async symbol(req: Request, res: Response) {
    const { address, contract, protocol } = req.params
    
    try {
      const { result: symbol } = await txController.callSmartContractMethod({
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
      }) 
      
      return res.json({ symbol })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  },
  
  async tokenURI(req: Request, res: Response) {
    const { address, contract, tokenId, protocol } = req.params
    
    try {
      const { result: tokenURI } = await txController.callSmartContractMethod({
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
      }) 
      
      return res.json({ tokenURI })
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }
}