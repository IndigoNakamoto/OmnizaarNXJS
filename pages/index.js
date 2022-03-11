import Head from 'next/head'
import Navigation from '../components/navigation'
// import styles from './index.module.css'
import styled from 'styled-components';
import Background from '../components/background'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
      <Head>
        <title>Omnizaar</title>
        
      </Head>

      <Background />
      <Navigation /> 
      
      <Main>
        <h1>UNDER CONSTRUCTION</h1>
      </Main>
      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel"/>
        </a>
      </footer> */}
    </motion.div>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  h1{
    font-size: 2.5rem;
    color: #d64614;
  }
`