import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
    },[]);

    return (
        <>
            <Head>
                <title>Golden Abalone Bistro</title>
                <meta name="Golden Abalone Bistro" content="demo next app" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <link rel="stylesheet" href="path/to/materialize.css"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <SWRConfig value={{ fetcher }}>
                    <div className="footer-padding">
                        <Component {...pageProps}/>
                    </div>
                </SWRConfig>
            </Layout>  
        </>
    )   
}

export default MyApp
