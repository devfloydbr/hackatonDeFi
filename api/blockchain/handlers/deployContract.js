import CryptumSDK from 'cryptum-sdk'

import fs from 'fs'
import path from 'path'

async function deployContract() { 
  const cryptumSDK = new CryptumSDK({
    environment: 'development',
    apiKey: 'MDCMAGV-FK74EJV-KA8X3D8-R16A230',
  })  
  
  const txController = cryptumSDK.getTransactionController()

  try {  
    const transaction = await txController.createSmartContractDeployTransaction({
      wallet: {       
        protocol: 'CELO',
        privateKey: '0x5da5e1a6a85cb52e4c0d94ba899ca01a4bc923bf745edfeaafd95e3fb0dd3d02',
        publicKey: '0x637014f1ac532f2395d2e33401329f905035a0c42d66a9b8774d518c202219b498bbad5c29bc89ddbf4876dabe336cc7b2bd4b74f8ef0c19e942589b60634596',
        address: '0xb9ae7393a6c119ef73a6c5c176ceba3c00dbed8b',
        xpub: 'xpub6DyTmnpzMfEWqqLH9NTvt4Pn36sXvs3j4eSmTQwi6VCWaHfjPp9bAiDqw24yHfNRi5CW4UjCwuXqDBsB2E9BGXo1spey5YYXME39zikkcQr',
        testnet: true        
      },
      contractName: 'HelloWorld',
      params: ['hello'],
      source: fs.readFileSync(path.join(path.resolve(), 'blockchain/contracts/HelloWorld.sol'), { encoding: 'utf8' }),
      protocol: 'CELO'
    })
  
    console.log(transaction)  

    const { hash } = await txController.sendTransaction(transaction)
    console.log(hash)

  } catch (error) {
    console.log(error)
  }
}

deployContract();

