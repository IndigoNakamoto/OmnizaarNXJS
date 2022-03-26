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
    const theme = {
        main: "#E6E9EA"
      };

    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
            <>
                <Head>
                    <title>Omnizaar - About Us</title>
                </Head>
                
                <Navigation theme={theme}/> 
                <ImageHero heroData={heroData}/>
                <Article content={body} title={'ABOUT'} 
                theme={theme} subtitle={'About Omnizaar'}
                />                
            </>
      </motion.div>
    )
}

