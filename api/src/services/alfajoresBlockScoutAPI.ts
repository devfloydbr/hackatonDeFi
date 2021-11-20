import axios from 'axios'

const alfajoresBlockScoutAPI = axios.create({
  baseURL: 'https://alfajores-blockscout.celo-testnet.org/api/'
})

export default alfajoresBlockScoutAPI