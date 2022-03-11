import Head from 'next/head'
import Navigation from '../components/navigation'
import styled from 'styled-components';
// import Background from '../components/background'
import { motion } from 'framer-motion'

export default function Learn() {
    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
            <Div>
                <Head>
                <title>Omnizaar - Learn</title>
                </Head>
        
                
                <Navigation /> 
                
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
    background-color: #212c37;
    z-index: -1;
    h1{
        font-size: 2.5rem;
        color: #fdfdfd;
    }
  `

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 68em;
    margin: 0 auto;
    height: 80vh;
    color: #fdfdfd;
    opacity: 90%;
    z-index: 5;
    
`