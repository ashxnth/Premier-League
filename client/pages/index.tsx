import Head from 'next/head'
import Navbar from '../components/Navbar'
import TradingViewCard from '../components/TradingViewCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nasdash</title>
      </Head>
      <Navbar />
      <div className="container">
        <TradingViewCard companySymbol="AAPL"/>
        <TradingViewCard companySymbol="MSFT"/>
        <TradingViewCard companySymbol="NFLX"/>
      </div>
    </div>
  )
}
