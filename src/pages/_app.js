import { SearchProvider } from '@/context/SearchCont'
import '@/styles/globals.css'
import Head from 'next/head'
<link rel="icon" href="/Users/23LP2243/Desktop/blog/blog/public/Logo.png" sizes="any" />

export default function App({ Component, pageProps }) {
  return <SearchProvider>
    <Head>
      <title>MetaBlog</title>
    </Head>
    <Component {...pageProps} />
  </SearchProvider>
}
