import React, { useContext, useState, createContext, ReactNode, useEffect } from 'react'

import { requestAccountAddress, waitForAccountAuth } from '@celo/dappkit'
import * as Linking from 'expo-linking'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthProviderProps {
  children: ReactNode;
}

interface Usuario {
  address: String;
  phoneNumber: String; 
  pepper?: String;
}

interface IAuthContextData {
  usuario: Usuario;
  signIn(): Promise<void>;
  storageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Usuario>({} as Usuario); 
  const [storageLoading, setStorageLoading] = useState(true);

  const userStorageKey = '@hackatonDeFi:usuario';

  async function signIn() {   
    const requestId = 'login'
    const dappName = 'hackatonDefi'
    const callback = Linking.makeUrl('/my/path');

    console.log(callback)

    requestAccountAddress({
      requestId,
      dappName,
      callback,
    });

    const dappkitResponse = await waitForAccountAuth(requestId);

    console.log(dappkitResponse.address)

    // The pepper is not available in all Valora versions

    const user = {
      address: dappkitResponse.address, 
      phoneNumber: dappkitResponse.phoneNumber, 
      pepper: dappkitResponse.pepper 
    }

    console.log(user)

    setUser(user);
    
    await AsyncStorage.setItem(userStorageKey, JSON.stringify(user)); 
  }  

  useEffect(() => {
    async function loadStoragedData() {
      const userStoraged = await AsyncStorage.getItem(userStorageKey);

      if(userStoraged) {
        const parseUserStoraged = JSON.parse(userStoraged) as Usuario;
        setUser(parseUserStoraged);
      }     

      setStorageLoading(false);
    }

    loadStoragedData();
  }, [userStorageKey]);

  return (
    <AuthContext.Provider value={{
      usuario: user,
      signIn,
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