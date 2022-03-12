import Image from 'next/image'

import React from "react";
import styled from 'styled-components';

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
    

const Hero = ({heroData}) => { 
    const url = heroData.formats.medium.url
    // alt = heroData.attributes.alt

    return (
        <StyledDiv>
            <StyledDiv className='gradient'/>
            <Image 
                src={url}
                layout='fill'
                objectFit='cover'
                alt=''
                priority='true'
            />
        </StyledDiv>
    )
}
export default Hero

const StyledDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 55vh;
    left: 0;
    right: 0;
    top: 0;
    background-size: cover;
    z-index: 0;
    .gradient{
        width: 100%;
        height: 55vh;
        background: linear-gradient(180deg, 
            rgba(255,255,255,0.05) 10%, rgba(43,42,40,1) 90%);
        z-index: 1;
    }
`