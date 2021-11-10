// Aicionando o ContractKit e instanciando o kit.

import { newKitFromWeb3 } from "@celo/contractkit"
import Web3 from "web3"

const provider = 'https://celo-alfajores--rpc.datahub.figment.io/apikey/ed912e82e8d64e357aa67d691291b39e/'

export const web3 = new Web3(provider)

export const kit = newKitFromWeb3(web3)
