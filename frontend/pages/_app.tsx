import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

import { GeistProvider, CssBaseline, Page } from "@geist-ui/core"
import { configureChains, chain, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from "wagmi/providers/public"
import { alchemyProvider } from "wagmi/providers/alchemy"

import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { InjectedConnector } from "wagmi/connectors/injected"

import TopBar from "../components/TopBar"
import Footer from '../components/Footer'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({
      apiKey: process.env.ALCHEMY_GOERLI_API_KEY,
      priority: 0
    }),
    publicProvider()
  ]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider
})

function MyApp({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return (
    <GeistProvider themeType={themeType}>
      <WagmiConfig client={client}>
        <CssBaseline />
        <Page>
          <Page.Header>
            <TopBar/>
          </Page.Header>
          <Component {...pageProps} />
          <Page.Footer>
            <Footer/>
          </Page.Footer>
        </Page>
      </WagmiConfig>
    </GeistProvider>
  )
}

export default MyApp
