import "../styles/globals.css";
import Head from "next/head";
export default function MyApp({ Component, pageProps }) {
return (
<>
  <Head>
   {/* This ways to add css on global website use local asset folder withhtml link tag */}
        
 </Head>
  <Component {...pageProps} />
</>
)}