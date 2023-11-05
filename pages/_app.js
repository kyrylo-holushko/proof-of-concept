import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
    },[]);

    return (
        <>
            <Head>
                <title>Golden Abalone Bistro</title>
                <meta name="Golden Abalone Bistro" content="demo next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>  
        </>
    )   
}

export default MyApp
