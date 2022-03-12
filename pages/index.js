import Head from 'next/head'
import Navigation from '../components/navigation'
import styled from 'styled-components';
import Background from '../components/background'
import { motion } from 'framer-motion'

export default function Home() {
  const theme = {
    main: "#d64614"
  };

  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
      <Head>
        <title>Omnizaar</title>
        
      </Head>

      <Background />
      <Navigation theme={theme}/> 
      
      <Main>
        <h1>UNDER CONSTRUCTION</h1>
      </Main>
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