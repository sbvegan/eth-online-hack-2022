import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { GeistProvider, CssBaseline, Page } from "@geist-ui/core"
import TopBar from "../components/TopBar"
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  // todo: wagmi provider

  return (
    <GeistProvider themeType={themeType}>
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
    </GeistProvider>
  )
}

export default MyApp
