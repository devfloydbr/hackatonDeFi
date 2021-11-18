import React, { useContext, useState, createContext, ReactNode, useEffect } from 'react'

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
  connect(): Promise<void>;
  storageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Usuario>({} as Usuario); 
  const [storageLoading, setStorageLoading] = useState(true);

  const userStorageKey = '@hackatonDeFi:usuario';
 

  async function connect() {     
 
    // setUser(user);
    
    // await AsyncStorage.setItem(userStorageKey, JSON.stringify(user)); 
  }  

  // useEffect(() => {
  //   async function loadStoragedData() {
  //     const userStoraged = await AsyncStorage.getItem(userStorageKey);

  //     if(userStoraged) {
  //       const parseUserStoraged = JSON.parse(userStoraged) as Usuario;
  //       setUser(parseUserStoraged);
  //     }     

  //     setStorageLoading(false);
  //   }

  //   loadStoragedData();
  // }, [userStorageKey]);

  return (
    <AuthContext.Provider value={{
      usuario: user,
      connect,
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