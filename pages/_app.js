import '../styles/global.css'
// can be used to keep state when navigating between pages


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
