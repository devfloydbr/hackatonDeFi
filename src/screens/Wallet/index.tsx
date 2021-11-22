import React, { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import {
  Container,
  WalletContainer,
  ResumeContainer,
  AssetContainer,
  AssetName,
  AssetSymbol,
  AssetAmount,
  NftContainer,
  Nft,
  NftImage,
  NftTitle,
  NftName,
  Nftsymbol
} from './styles'
import { useAuth } from '../../hooks/auth'

interface TransferByAddress {  
  blockHash: string;
  blockNumber: string;
  confirmations: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  from: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  hash: string;
  input: string;
  logIndex: string;
  nonce: string;
  timeStamp: string;
  to: string;
  tokenDecimal: string;
  tokenID: string;
  tokenName: string;
  tokenSymbol: string;
  transactionIndex: string;  
  uri?: string;
  name?: string;
  symbol?: string;
}

export function Wallet() {
  const [nfts, setNfts] = useState([] as TransferByAddress[])

  const { wallet, refreshWallet } = useAuth()  

  useEffect(() => {
    async function response() {
      const url = `transfersByAddress/${wallet.wallet.address}/0x49d30D42fD2BE5a897452e41299ee1B4279DC340/1/0`
      const response = await api.get<TransferByAddress[]>(url)

      response.data.forEach(async (transfer) => {
        if (transfer.from !== wallet.wallet.address) {
          const validTransfers = [] as TransferByAddress[];

          const urlTokenUri = `tokenURI/CELO/${wallet.wallet.address}/0x49d30D42fD2BE5a897452e41299ee1B4279DC340/${transfer.tokenID}`

          const urlTokenName = `name/CELO/${wallet.wallet.address}/0x49d30D42fD2BE5a897452e41299ee1B4279DC340`          

          const urlTokenSimbol = `symbol/CELO/${wallet.wallet.address}/0x49d30D42fD2BE5a897452e41299ee1B4279DC340`

          const responseTokenUri = await api.get(urlTokenUri)          

          const responseTokenName = await api.get(urlTokenName)          

          const responseTokenSymbol = await api.get(urlTokenSimbol)

          validTransfers.push({
            ...transfer,
            uri: responseTokenUri.data.tokenURI,
            name: responseTokenName.data.name,
            symbol: responseTokenSymbol.data.symbol
          })

          setNfts(validTransfers)
        }
      })
    }

    response()
  }, [])

  useEffect(() => {
    refreshWallet()
  }, [wallet])

  return (
    <Container>
      <Header />   
      <WalletContainer>
        <ResumeContainer>
          {wallet.balances.map((balance, index) => (
            <AssetContainer key={index}>
              <AssetName>{balance.asset}</AssetName>
              <AssetAmount>{balance.amount}</AssetAmount>
            </AssetContainer>
          ))}
        </ResumeContainer>
        <NftTitle>NFT'S</NftTitle>
        <NftContainer>
          {nfts.map((nft: any, index) => (
            <Nft key={index}>              
              <NftImage 
                source={{ uri: nft.uri}}
              />
              <NftName>{nft.name}</NftName>
              <Nftsymbol>Symbol: {nft.symbol}</Nftsymbol>
            </Nft>
          ))}          
        </NftContainer>
      </WalletContainer>
    </Container>    
  );
}