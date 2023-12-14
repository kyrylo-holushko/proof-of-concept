import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState, createContext } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const MenuContext = createContext();

function MyApp({ Component, pageProps }) {

    const [menu, setMenu] = useState();

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
        const section = localStorage.getItem('section') || null;
        setMenu(section);
        const M = require('materialize-css');  
    },[]);

    return (
        <>
            <Head>
                <title>Golden Abalone Bistro</title>
            </Head>
            <Layout>
                <SWRConfig value={{ fetcher }}>
                    <MenuContext.Provider value={{ menu, setMenu }}>
                        <div className="footer-padding">
                            <Component {...pageProps}/>
                        </div>
                    </MenuContext.Provider>
                </SWRConfig>
            </Layout>  
        </>
    )   
}

export default MyApp
