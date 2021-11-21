import express from 'express'

import WalletsController from './controllers/WalletsController'
import NftsController from './controllers/NftsController'
import ContractsController from './controllers/ContractsController'
import SwapController from './controllers/SwapController'

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ api: 'API TRANSFER' })
})

// WALLET
routes.post('/wallet', WalletsController.create)

routes.get('/wallet/:address/:protocol', WalletsController.read)


// NFT
routes.post('/nft', NftsController.create)

routes.post('/mint', NftsController.mint)

routes.post('/safeTransfer', NftsController.safeTransfer)

routes.get('/name/:protocol/:address/:contract', NftsController.name)

routes.get('/symbol/:protocol/:address/:contract', NftsController.symbol)

routes.get('/tokenURI/:protocol/:address/:contract/:tokenId', NftsController.tokenURI)


// CONTRACT
routes.get('/transfersByAddress/:address/:contract/:page/:offset', ContractsController.transfersByAddress)

routes.get('/tokenBalance/:address/:contract', ContractsController.tokenBalance)

routes.post('/transferToken', ContractsController.transferToken)

// SWAP
routes.post('/createSwap', SwapController.createSwap)

export default routes