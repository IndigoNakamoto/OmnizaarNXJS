import Head from 'next/head'
import Navigation from '../components/navigation'
import styled from 'styled-components';
// import Background from '../components/background'
import { motion } from 'framer-motion'

export default function Explore() {
    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
          <Div>
              <Head>
              <title>Omnizaar - Explore</title>
              <link rel="icon" href="/favicon.ico" />
              </Head>
      
              
              <Navigation theme={theme}/> 
              
              <Main>
                <h1>UNDER CONSTRUCTION</h1>
              </Main>
        </Div>
      </motion.div>
    )
  }

  const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #1a2c4c;
    z-index: -1;
    h1{
        font-size: 2.5rem;
        color: #e8e4ce;
    }
  `

  const Main = styled.main`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: lightgrey; */
    max-width: 68em;
    margin: 0 auto;
    height: 80vh;
    color: #fdfdfd;
    opacity: 90%;
    z-index: 5;
`