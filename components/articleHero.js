import React from "react";
import styled from 'styled-components';

const Hero = ({urlHero}) => { 

    return (
        <div>
            <StyledHero urlHero={urlHero}/>
        </div>
    )
}
export default Hero

const StyledHero = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    max-width: 100%;
    height: 55vh;
    background-size: cover;

    ${(props) => 
        `background-image: linear-gradient(180deg, 
            rgba(255,255,255,0.05) 10%, rgba(43,42,40,1) 90%), 
            url(${props.urlHero});`
    }
`