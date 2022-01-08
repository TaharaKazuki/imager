import type { NextPage } from 'next'
import Head from 'next/head'
import Featured from '../components/Featured'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pizza in Tahara</title>
        <meta name="description" content="Pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  )
}

export default Home
