import 'dotenv/config'
import CryptumSDK from '../blockchain/cryptum-sdk/dist'


async function deployToken() { 
  const cryptumSDK = new CryptumSDK({
    environment: 'development',
    apiKey: String(process.env.CRYPTUM_API_KEY)
  })  
  
  const txController = cryptumSDK.getTransactionController() 

  try {  
    const transaction = await txController.createTokenDeployTransaction({
      wallet: {
        protocol: 'CELO',
        privateKey: '0xdfa07535adaddd893e0e1c4688ed93e10ec9b7490aa5d517aac72eecb9d8ed6e',
        publicKey: '0xf936e217184b3dde03d3f87f3e0d622ba95a639a9da285cf2bce7e53f89bf223069ac3b76f7994281cdeadd123660dddf2e486ab6e5830a2f32b0acaf30e1de6',
        address: '0x675f187b4b1561e430cf8cf3e4bc1e6b3c7ce9f0',
        xpub: 'xpub6ELvgpQFTxyNvgmHq5sDTJwpfF7aaeTpMHd21pie252cKQsrzg2PCwkmzj9nTLLgzDsBUPum9UHFbSpA1vhKG6f3K2Bq4Bzo3VbSav6qPY2',
        testnet: true
      },
      tokenType: 'ERC20',
      params: ['TRANSFER', 'TRAN', '1000000'],
      protocol: 'CELO',
      testnet: true
    })
  
    console.log(transaction)  

    const { hash } = await txController.sendTransaction(transaction)
    console.log(hash)

  } catch (error) {
    console.log(error)
  }
}

deployToken();