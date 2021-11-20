import CryptumSDK from '../../blockchain/cryptum-sdk'

export const cryptumSDK = new CryptumSDK({
  environment: 'development',
  apiKey: String(process.env.CRYPTUM_API_KEY),
})