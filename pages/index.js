import Head from 'next/head'
import Navigation from '../components/navigation'
import styled from 'styled-components';
import Background from '../components/background'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
      {/* <Navigation theme={theme}/>  */}
      
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
                <Link href="https://discord.gg/cURfeczgqQ/" passHref={true} target="_blank">
                  <a>Discord</a>
                </Link>
              </li> 

              <li>
                <Link href="https://www.instagram.com/omnizaarart/" passHref={true} target="_blank">
                  <a>Instagram</a>
                </Link>
              </li>              

              <li>
                <Link href="https://twitter.com/omnizaar" passHref={true} target="_blank">
                  <a>Twitter</a>
                </Link>
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
  right: 0;
  min-width: 50vw;
  max-width: 68rem;
`

const Nav = styled.nav`
  ul{
    display: flex;
    list-style: none;
    li{
      cursor: pointer;
      color: black;      
      a{
        font-size: .9rem;
        padding-right: 3em;
        text-decoration: none;
        color: grey;
      }
    }
    
  }

`

const Main = styled.main`
  position: fixed;
  background-color: #E6E9EA;
  margin: 0;
  padding: 0;
  width: 50vw;
  min-width: 50vw;
  max-width: 100vw;
  top: 0;
  right: 0;
  bottom: 0;
  
  
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