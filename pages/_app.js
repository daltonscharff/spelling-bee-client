import Head from 'next/head'
// import '../styles/globals.css'

function NextApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spelling Bee</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default NextApp
