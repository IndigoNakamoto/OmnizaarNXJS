import Head from 'next/head'
import Navigation from '../components/navigation'
import styled from 'styled-components';
import Background from '../components/background'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

export default function Home() {
  const theme = {
    main: "#E6E9EA"
  };

  return (
    <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
      <Head>
        <title>Omnizaar</title>
        
      </Head>

      <Background />
      <Navigation theme={theme}/> 
      
      <Main>

        <div>
          <header>
            <nav>
              <Link href="/">
                  <Logo src="/omnizaar-logo.svg" alt="Omnizaar"/>
              </Link>
            </nav>
          </header>
          <h1>Discover Soon</h1>
          <h2>Omnizaar is under construction.</h2>
        </div>
        <Footer>
          <Nav>
            <ul>
              <li>
                  <Link href="/about">
                      <a>About</a>
                  </Link>
                  
              </li>
              <li>
                  <Link href="/learn">
                      <a>Learn</a>
                  </Link>
              </li>
              <li>
                <a
                    href="https://twitter.com/omnizaar"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <AiOutlineTwitter className='social'/> 
                </a>
              </li>   
              <li>
                <a
                    href="https://instagram.com/omnizaarart"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <AiOutlineInstagram className='social'/> 
                </a> 
              </li>      


            </ul>
          </Nav>
        </Footer>
      </Main>
  </motion.div>
  )
}

const Logo = styled.img`
  color: black;
  width: 6rem;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  
  @media (max-width: 950px) {
    left: 40vw;
    
  }
  @media (max-width: 750px) {
    left: 0;
  }  
`

const Nav = styled.nav`
  ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    
    li{
      cursor: pointer;
      color: black;      
      padding-top: .5em;
      @media (min-width: 1200px) {
          padding-right: .9em;   
        }
      a{
        font-size: .9rem;
        padding-right: 1.5em;
        text-decoration: none;
        color: grey;
      }
      .social{
        font-size: 1.2rem;
      }
    }
    
  }

`

const Main = styled.main`
  position: fixed;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 50vw;
  min-width: 50vw;
  max-width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  @media (max-width: 950px) {
    width: 60vw;
    min-width: 60vw;
  }

  @media (max-width: 750px) {
    z-index: 10000;
    width: 100vw;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 0;
    margin: 0;
  }  
  
  h1{
    font-size: 4.5rem;
    color: black;
  }
  h2{
    font-size: 2.25rem;
    color: black;
  }
  div{
    
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 1em;
    margin: 1em;
  }
`