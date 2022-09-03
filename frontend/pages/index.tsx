import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Text, Input, Button } from '@geist-ui/core'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eth PoS ! PoS</title>
        <meta name="description" content="An Ethereum powered point of sales system." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text h1>
          Welcome to Ethereum's 
          <br/>
          <span>Point of Sales</span>
        </Text>

        <Text className={styles.description}>
          Lets revisit the idea of cryptocurrency payments.
        </Text>

        <div className={styles.load}>
          <Input width="auto" placeholder='Store ID'/>
          <Button scale={0.75}>Load Store</Button>
        </div>

        <Text>or</Text>

        <Button type="secondary">Create New Store</Button>
        
      </main>

      
    </div>
  )
}

export default Home
