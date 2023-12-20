import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState, createContext } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { SWRConfig } from 'swr';
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const MenuContext = createContext();

function MyApp({ Component, pageProps }) {
    
    const { data } = useSWR("https://proof-of-concept-gab.vercel.app/api/promo", fetcher);
    const [menu, setMenu] = useState();
    const [modalPage, setModalPage] = useState(0);

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
        const section = localStorage.getItem('section') || null;
        setMenu(section);
        const M = require('materialize-css');
        
        var melems = document.querySelectorAll('.modal');
        var minstances = M.Modal.init(melems);

        var promoModal = document.querySelector('#modal1');
        
        setTimeout(()=>{
            let instance = M.Modal.getInstance(promoModal);
            instance.open();
        }, 4000); // set to 8000
    },[]);
    
    function prevPromo(){
        let promoList = document.querySelectorAll("#promo > div");
        if(modalPage>0 && modalPage<=(promoList.length-1))
            setModalPage(modalPage-1);
    }

    function nextPromo(){
        let promoList = document.querySelectorAll("#promo > div");
        if(modalPage>=0 && modalPage<(promoList.length-1))
            setModalPage(modalPage+1);
    }

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
                    <h4 className="center-text modal-title">SPECIAL PROMOTION</h4>
                    <div id="promo" className="center-text"> 
                        {data ? 
                        data.promos.map((item,i)=>{
                            return <div className="promo-container white-text" href={`#${i}`} key={i} data-id={i} style={{ display: i===modalPage ? "block" : "none"}}>
                                <img src={item?.image} width="85%" height="auto"/>
                                <div className="centered">
                                    <h5>{item?.name}</h5><br/>
                                    <h4>Discount: {item?.discount} Off</h4><br/>
                                    <a className="waves-effect black waves-light btn-small" target="_blank" href={item?.link}>Buy now</a>
                                </div>
                            </div>
                        }) 
                        : <h4>Error</h4>}
                    </div>
                    <div className="center-text arrow-padding">
                        <i className="medium material-icons modal-arrows" onClick={e=>{prevPromo()}}>keyboard_arrow_left</i>
                        <i className="medium material-icons modal-arrows" onClick={e=>{nextPromo()}}>keyboard_arrow_right</i>
                    </div>
                </div>
                
            </div>  
        </>
    )   
}

export default MyApp