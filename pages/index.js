import Head from 'next/head'
import Nav from '../components/navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omnizaar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav /> 
      
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing
        </p>
      </main>


      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

    </div>
  )
}
