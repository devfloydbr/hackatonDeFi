import React, { useContext, useState, createContext, ReactNode, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { api } from '../services/api'


interface AuthProviderProps {
  children: ReactNode;
}

interface Wallet {
  mnemonic: string;
  wallet: {
      privateKey: string;
      publicKey: string;
      address: string;
      xpub: string;
      testnet: boolean;
  };
  balances: Asset[];
}

interface IAuthContextData {
  wallet: Wallet;
  connect(): Promise<void>;
  signUp(): Promise<void>;
  signOut(): Promise<void>;
  refreshWallet(): Promise<void>;
  storageLoading: boolean;
}

interface WalletResponse {  
  response: {
    mnemonic: string;
    wallet: {
      privateKey: string;
      publicKey: string;
      address: string;
      xpub: string;
      testnet: boolean;
    }
  }
}
interface TokenBalanceResponse {
  address: string;
  contract: string;
  total: number;
}

interface Asset {
  asset: string;
  amount: number;
}

interface AssetBalance {
  amount: string;
  asset: string;
}

interface WalletInfoResponse {
  walletInfo: {
    address: string;
    balances: AssetBalance[];
    link: string;
    nonce: number;
  },
}

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [wallet, setWallet] = useState<Wallet>({} as Wallet)
  const [storageLoading, setStorageLoading] = useState(true)

  const walletStorageKey = '@transferDapp:wallet' 

  async function connect() {     
 
    // setUser(user);
    
    // await AsyncStorage.setItem(userStorageKey, JSON.stringify(user)); 
  }  

  async function signUp() {    
    try {
      const responseNewWallet = await api.post<WalletResponse>('wallet', {
        protocol: 'CELO'
      })      

      const wallet = responseNewWallet.data.response.wallet
      const mnemonic = responseNewWallet.data.response.mnemonic      
  
      await api.post('transferToken', {
        wallet: {
          privateKey: '0xdfa07535adaddd893e0e1c4688ed93e10ec9b7490aa5d517aac72eecb9d8ed6e',
          publicKey: '0xf936e217184b3dde03d3f87f3e0d622ba95a639a9da285cf2bce7e53f89bf223069ac3b76f7994281cdeadd123660dddf2e486ab6e5830a2f32b0acaf30e1de6',
          address: '0x675f187b4b1561e430cf8cf3e4bc1e6b3c7ce9f0',
          xpub: 'xpub6ELvgpQFTxyNvgmHq5sDTJwpfF7aaeTpMHd21pie252cKQsrzg2PCwkmzj9nTLLgzDsBUPum9UHFbSpA1vhKG6f3K2Bq4Bzo3VbSav6qPY2',
          testnet: true
        },
        address: wallet.address,
        protocol: 'CELO',
        contract: '0x08B31270DE323EfAB3998011b263528f9a7D3e9d',
        amount: 10
      })  
      
      await api.post('mint', {
        wallet: {
          privateKey: '0xdfa07535adaddd893e0e1c4688ed93e10ec9b7490aa5d517aac72eecb9d8ed6e',
          publicKey: '0xf936e217184b3dde03d3f87f3e0d622ba95a639a9da285cf2bce7e53f89bf223069ac3b76f7994281cdeadd123660dddf2e486ab6e5830a2f32b0acaf30e1de6',
          address: '0x675f187b4b1561e430cf8cf3e4bc1e6b3c7ce9f0',
          xpub: 'xpub6ELvgpQFTxyNvgmHq5sDTJwpfF7aaeTpMHd21pie252cKQsrzg2PCwkmzj9nTLLgzDsBUPum9UHFbSpA1vhKG6f3K2Bq4Bzo3VbSav6qPY2',
          testnet: true
        },
        address: wallet.address,
        protocol: 'CELO',
        contract: '0x49d30d42fd2be5a897452e41299ee1b4279dc340',
        uri: 'https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      })   

      setTimeout(async () => {
        const tokenBalanceUrl = `tokenBalance/${wallet.address}/0x08B31270DE323EfAB3998011b263528f9a7D3e9d`

        const readWalletUrl = `wallet/${wallet.address}/CELO`

        const responseTokenBalance = await api.get<TokenBalanceResponse>(tokenBalanceUrl) 

        const responseReadWallet = await api.get<WalletInfoResponse>(readWalletUrl) 

        let assets: Asset[] = [];

        assets.push({
          asset: 'TRAN',
          amount: responseTokenBalance.data.total
        })

        responseReadWallet.data.walletInfo.balances.map(balance => {    
          return assets.push({
            asset: balance.asset,
            amount: Number(balance.amount)
          })
        })

        const newWallet = {
          mnemonic,
          wallet,
          balances: assets
        } 

        setWallet(newWallet)
        await AsyncStorage.setItem(walletStorageKey, JSON.stringify(newWallet))        
      }, 5000)            
    } catch (error) {
      console.log(error)
    }    
  }

  async function signOut() {
    console.log('signout')
    setWallet({} as Wallet);
    await AsyncStorage.removeItem(walletStorageKey)
  }

  async function refreshWallet() {    
    try {   
      const tokenBalanceUrl = `tokenBalance/${wallet.wallet.address}/0x08B31270DE323EfAB3998011b263528f9a7D3e9d`

      const readWalletUrl = `wallet/${wallet.wallet.address}/CELO`

      const responseTokenBalance = await api.get<TokenBalanceResponse>(tokenBalanceUrl) 

      const responseReadWallet = await api.get<WalletInfoResponse>(readWalletUrl) 

      let assets: Asset[] = [];

      assets.push({
        asset: 'TRAN',
        amount: responseTokenBalance.data.total
      })

      responseReadWallet.data.walletInfo.balances.map(balance => {    
        return assets.push({
          asset: balance.asset,
          amount: Number(balance.amount)
        })
      })

      let newWallet = wallet

      newWallet.balances = assets      

      setWallet(newWallet)
      await AsyncStorage.setItem(walletStorageKey, JSON.stringify(newWallet)) 
    } catch (error) {
      console.log(error)
    }    
  }


  useEffect(() => {
    async function loadStoragedData() {
      const walletStoraged = await AsyncStorage.getItem(walletStorageKey);

      if(walletStoraged) {
        const parseUserStoraged = JSON.parse(walletStoraged) as Wallet;
        setWallet(parseUserStoraged);
      }     

      setStorageLoading(false);
    }

    loadStoragedData();
  }, [walletStorageKey]);

  return (
    <AuthContext.Provider value={{
      wallet,
      connect,
      signUp,
      signOut,
      refreshWallet,
      storageLoading
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }