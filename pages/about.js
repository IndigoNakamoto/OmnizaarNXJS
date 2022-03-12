import Head from 'next/head'
import Navigation from '../components/navigation'
import { motion } from 'framer-motion'
import Article from '../components/article';
import ImageHero from '../components/ImageHero'

About.getInitialProps = async (ctx) => {
    const res = await fetch("https://test-deploy-digital-ocean-hhbor.ondigitalocean.app/api/about?populate=*")
    const json = await res.json()
    return { aboutData: json.data}
}

//TODO: Include style colors in Strapi for editor to choose. 
//TODO: Pass down style colors. 
export default function About({aboutData}) {
    const body = aboutData.attributes.Body
    const heroData = aboutData.attributes.Hero.data.attributes
    const background = '#212c37'
    const accent1 = 'green'
    const accent2 = '#37aec7'
    const fontcolor = '#fcfcfc'

    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
            <>
                <Head>
                    <title>Omnizaar - About Us</title>
                </Head>
                
                <Navigation accent1={accent1}/> 
                <ImageHero heroData={heroData}/>
                <Article content={body} title={'ABOUT'} 
                accent1={accent1} subtitle={'About Omnizaar'}
                />                
            </>
      </motion.div>
    )
}