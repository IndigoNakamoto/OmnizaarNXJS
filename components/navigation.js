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
            </Header>
        </ThemeProvider>
    )
}

const Logo = styled.img`
  color: black;
  width: 12rem;
  cursor: pointer;
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