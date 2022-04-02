import Link from 'next/link';
import {useState} from "react";
import styled from 'styled-components';
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { ThemeProvider } from 'styled-components';

export default function Navigation(props) {
    const [open, setOpen] = useState(false)
    return (
        <ThemeProvider theme={props.theme}>
            <Header>
                <Link href="/" onClick={() => setOpen(false)}>
                  <Logo src="/omnizaar.svg" alt="Omnizaar"/>
                </Link>
                <Nav open={open}>
                    <div>
                        
                        
                        <Link href="/" onClick={() => setOpen(false)}>
                            <Logo src="/omnizaar.svg" alt="Omnizaar"/>
                        </Link>

                        
                        <AiOutlineClose className='close' onClick={() => setOpen(false)}/>
                        
                    </div>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a onClick={() => setOpen(false)}>About</a>
                            </Link>
                            
                        </li>
                        {/* <li>
                            <Link href="/explore">
                                <a onClick={() => setOpen(false)}>EXPLORE</a>
                            </Link>
                            
                        </li> */}
                        <li>
                            <Link href="/learn">
                                <a onClick={() => setOpen(false)}>Learn</a>
                            </Link>
                            {/* <CgMathPlus className='expand'/> */}
                        </li>
                        {/* <li>
                            <Link href="/mint">
                                <a onClick={() => setOpen(false)}>MINT</a>
                            </Link>
                            <CgMathPlus className='expand'/>
                        </li> */}

                    </ul>

                    <Footer>
                        <div>
                            <a
                                href="https://twitter.com/omnizaar"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <AiOutlineTwitter className='social'/> 
                            </a>
                            <a
                                href="https://instagram.com/omnizaarart"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <AiOutlineInstagram className='social'/> 
                            </a>
                        </div>
                        
                        <div>
                            <a
                            href="https://omnilite.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                Powered by{' '}
                                <img src="/omnilite-logo.svg" alt="Omnilite"/>
                            </a>
                        </div>
                    </Footer>
                </Nav>

                <AiOutlineMenu className='menu' open={open} onClick={() => setOpen(!open)}/> 

            </Header>
        </ThemeProvider>
    )
}

const Logo = styled.img`
  color: black;
  width: 12rem;
  cursor: pointer;
`

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    .social{
        font-size: 2em;
        color: white;
    }

    a{ 
        padding: 0 .5em;
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        img{
            height: 1.75em;
        }
    }
`
const Nav = styled.nav` 
    position: fixed;
    right: 0;
    top: 0;
    background: linear-gradient(15deg, rgba(8,47,75,1) 1%, rgba(248,153,38,1) 100%);
    height: 100vh;
    width: 100%;
    z-index: 999;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    
    transition: transform 0.2s ease-in-out;
    
    div{
        height: 3em;
        margin: 0 auto;
        padding: 1em 1.5em;
        max-width: 68em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        
        .navlogo{
            color: black; 
            font-size: 2.25rem;
            font-weight: bold;
            text-decoration: underline;
        }

    }
    .close{
        font-size: 2rem;
        cursor: pointer;
        color: white;
    }
    ul{                   
        list-style-type: none;
        margin: 0 auto;
        padding: 1em 1.5em;
        max-width: 68em;
        
        /* background-color: grey; */
        justify-content: center;
        /* padding: 0; */
        li{
            display: flex;
            align-items: center;
            align-content: center;
            padding: 0.5em 0em;
            color: white;
            .expand{
                padding-right: 1em;
                font-size: 1rem;
            }
        }
        a{
            text-decoration: none;
            color: white;
            margin:  0.25em 0;
            display: block;
            font-size: 2rem;
            font-weight: 400;
        }
        a:hover {
            text-decoration: underline;
            color: '#37aec7';
            font-weight: bold;
        }
    }
`
const Header = styled.header`
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0; 
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 68em;
    margin: 0 auto;
    padding: 1em 1.5em;
    z-index: 999;
    height: 3em;

    .logo {         
        font-size: 2.25rem;
        font-weight: bold;
        text-decoration: underline;
        color: ${props => props.theme.main};
    }   

    .menu{
        font-size: 1.75rem;
        color: ${props => props.theme.main};
        cursor: pointer;
    }
`
Header.defaultProps = {
    theme: {  
        main: 'white', 
    }
}