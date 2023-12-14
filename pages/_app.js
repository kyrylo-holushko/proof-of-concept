import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState, createContext } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { SWRConfig } from 'swr';
import useSWR from "swr"

{/* <div class="carousel-fixed-item center">
                                <a class="btn waves-effect white grey-text darken-text-2">button</a>
                            </div> */}

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const MenuContext = createContext();

function MyApp({ Component, pageProps }) {
    
    const { data } = useSWR("http://localhost:3000/api/promo", fetcher);

    const [menu, setMenu] = useState();

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
        const section = localStorage.getItem('section') || null;
        setMenu(section);
        const M = require('materialize-css');

        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);

        document.addEventListener('DOMContentLoaded', function() {
            var celems = document.querySelectorAll('.carousel');
            var cinstances = M.Carousel.init(celems, {
                fullWidth: true,
                indicators: true
            });
        });
        

        setTimeout(()=>{
            var promoModal = document.querySelector('#modal1');
            let instance = M.Modal.getInstance(promoModal);
            instance.open();
        }, 8000);
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

            <div id="modal1" className="modal">
                <div className="modal-content">
                <i className="material-icons right modal-close">close</i>
                    <h4 className="center-text">SPECIAL PROMOTION</h4>
                    <div id="promo">
                        <div className="carousel carousel-slider center">
                            {data ? 
                            data.promos.map((item,i)=>{
                                <div class="carousel-item blue dark-text" href="" key={i}>
                                    <h2>{item?.name}</h2><br/><br/>
                                    <h3>Discount: {item?.discount} Off</h3>
                                </div>
                            }) 
                            : <h4>Error</h4>}
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )   
}

export default MyApp
