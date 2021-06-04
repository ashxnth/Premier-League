import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { TeamView } from './TeamView'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier League</title>
      </Head>
      <Navbar name="Premier League" />
      <TeamView />
    </div>
  )
}
