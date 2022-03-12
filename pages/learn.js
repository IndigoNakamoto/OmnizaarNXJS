import Head from 'next/head'
import Navigation from '../components/navigation'
import { motion } from 'framer-motion'
import Article from '../components/article';
import ImageHero from '../components/ImageHero'

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
    const background = '#212c37'
    const accent1 = 'green'
    const accent2 = '#37aec7'
    const fontcolor = '#fcfcfc'

    console.log(learnData)

    return (
        <motion.div initial={{opacity:0.75}} animate={{opacity:1}}>
            <>
                <Head>
                    <title>Omnizaar - Learn</title>
                </Head>
                
                <Navigation accent1={accent1}/> 
                <ImageHero heroData={heroData}/>
                <Article content={body} title={'LEARN'} 
                accent1={accent1} subtitle={''}
                />                
            </>
      </motion.div>
    )
}