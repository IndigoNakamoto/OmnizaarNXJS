import Head from 'next/head'
import Navigation from '../components/navigation'
import { motion } from 'framer-motion'
import Article from '../components/article';
import ImageHero from '../components/ImageHero'
import styled from 'styled-components';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

Learn.getInitialProps = async (ctx) => {
    const res = await fetch("https://test-deploy-digital-ocean-hhbor.ondigitalocean.app/api/learn?populate=*")
    const json = await res.json()
    return { learnData: json.data}
}

//TODO: Include style colors in Strapi for editor to choose. 
//TODO: Pass down style colors. 
export default function Learn({learnData}) {
    const body = learnData.attributes.Body
    const hero = learnData.attributes.Hero.data.attributes.formats.medium.url
    const heroData = learnData.attributes.Hero.data.attributes

    const theme = {
        main: "#fcfcfc"
      };

    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
            <>
                <Head>
                    <title>Omnizaar - Learn</title>
                </Head>
                
                <Navigation theme={theme} /> 
                <ImageHero heroData={heroData}/>
                <Article content={body} title={'LEARN'} 
                theme={theme}  subtitle={''}
                />   
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
            </>
        </motion.div>
    )
}


const Footer = styled.footer`
    position: absolute;
    max-width: 68em;
    bottom: 0;
    margin: 0 auto;
    padding: 0 1.5em;
    left: 0;
    right: 0;
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