import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect, useState, createContext } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { SWRConfig } from 'swr';
import useSWR from "swr"
import $ from 'jquery'

{/* <div class="carousel-fixed-item center">
                                <a class="btn waves-effect white grey-text darken-text-2">button</a>
                            </div> */}

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const MenuContext = createContext();

function MyApp({ Component, pageProps }) {
    
    const { data } = useSWR("http://localhost:3000/api/promo", fetcher);
    console.log("SWR data:", data);
    const [menu, setMenu] = useState();

    const [triggerRerender, setTriggerRerender] = useState(false);

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
        const section = localStorage.getItem('section') || null;
        setMenu(section);
        const M = require('materialize-css');

        
        var melems = document.querySelectorAll('.modal');
        var minstances = M.Modal.init(melems);

        var promoModal = document.querySelector('#modal1');
       /*  if(!(triggerRerender>6)){
            setTriggerRerender(triggerRerender+1);
        } */
        if(triggerRerender>6){
            
        }
        console.log("HERE");

        //if(data){
            /* document.addEventListener('DOMContentLoaded', function() {
                var celems = document.querySelectorAll('.carousel');
                var cinstances = M.Carousel.init(celems, {
                    fullWidth: true,
                    indicators: true
                });
                var promoCarousel = document.querySelector('#promoCarousel');
                console.log("HERE HERE");
                data.promos.forEach((promoItem,i) => {
                    var carouselItem = document.createElement("div");
                    carouselItem.classList.add("carousel-item", "blue", "dark-text");
                    carouselItem.setAttribute("key", `${i}`);

                    var itemName = document.createElement("h2");
                    itemName.innerText = promoItem.name;

                    var itemDiscount = document.createElement("h3");
                    itemDiscount.innerText = "Discount: " + promoItem.discount + " Off";

                    carouselItem.appendChild(itemName);
                    carouselItem.appendChild(document.createElement("br"));
                    carouselItem.appendChild(document.createElement("br"));
                    carouselItem.appendChild(itemDiscount);

                    promoCarousel.appendChild(carouselItem);
                    
                });
            }); */
       // }
        /* promoModal.addEventListener('load', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true
            }); 
            setTriggerRerender(true);
        }); */
        

        setTimeout(()=>{
            //var promoModal = document.querySelector('#modal1');
            let instance = M.Modal.getInstance(promoModal);
            instance.open();

            //document.addEventListener('DOMContentLoaded', function() {
                /* if(triggerRerender){
                    var celems = document.querySelectorAll('.carousel');
                    var cinstances = M.Carousel.init(celems, {
                        fullWidth: true,
                        indicators: true
                    });
                } */
                /* var promoCarousel = document.querySelector('#promoCarousel');
                console.log("HERE HERE");
                data.promos.forEach((promoItem,i) => {
                    var carouselItem = document.createElement("div");
                    carouselItem.classList.add("carousel-item", "blue", "dark-text");
                    carouselItem.setAttribute("key", `${i}`);

                    var itemName = document.createElement("h2");
                    itemName.innerText = promoItem.name;

                    var itemDiscount = document.createElement("h3");
                    itemDiscount.innerText = "Discount: " + promoItem.discount + " Off";

                    carouselItem.appendChild(itemName);
                    carouselItem.appendChild(document.createElement("br"));
                    carouselItem.appendChild(document.createElement("br"));
                    carouselItem.appendChild(itemDiscount);

                    promoCarousel.appendChild(carouselItem);
                    
                }); */
           // });
        }, 3000); // set to 8000
    },[]);

    function prevPromo(){
        console.log("prev");
        let promoList = document.querySelectorAll("#promo div");
        let tempId;
        promoList.forEach(promoItem=> {
            let promoId = +promoItem.getAttribute("data-id");
            if(promoItem.style.display==="block" && promoId>0){
                tempId = promoId--;
                promoItem.style.display = "none";
            }
        });
        promoList.forEach(promoItem=> {
            let promoId = +promoItem.getAttribute("data-id");
            if(promoItem.style.display==="none" && promoId===tempId){
                promoItem.style.display = "block";
            }
        });
    }

    function nextPromo(){
        console.log("next");
        let promoList = document.querySelectorAll("#promo div");
        let tempId;
        promoList.forEach(promoItem=> {
            let promoId = +promoItem.getAttribute("data-id");
            if(promoItem.style.display==="block" && promoId<(promoList.length-1)){
                tempId = promoId++;
                promoItem.style.display = "none";
            }
        });
        promoList.forEach(promoItem=> {
            let promoId = +promoItem.getAttribute("data-id");
            if(promoItem.style.display==="none" && promoId===tempId){
                promoItem.style.display = "block";
            }
        });
        setTriggerRerender(!triggerRerender);
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
                    <h4 className="center-text">SPECIAL PROMOTION</h4>
                    <div id="promo" className="center-text">
                        
                            {data ? 
                            data.promos.map((item,i)=>{
                                return <div className="blue dark-text" href={`#${i}`} key={i} data-id={i} style={{ display: i===0 ? "block" : "none"}}>
                                    <img src={item?.image} width="80%" height="auto"/>
                                    <h2>{item?.name}</h2><br/>
                                    <h3>Discount: {item?.discount} Off</h3>
                                </div>
                            }) 
                            : <h4>Error</h4>}
                        
                    </div>
                    <div className="center-text">
                        <i className="medium material-icons" onClick={e=>{prevPromo()}}>keyboard_arrow_left</i>
                        <i className="medium material-icons" onClick={e=>{nextPromo()}}>keyboard_arrow_right</i>
                    </div>
                </div>
                
            </div>  
        </>
    )   
}

export default MyApp


/* {data ? 
    data.promos.map((item,i)=>{
        return <div className="carousel-item blue dark-text" href={`#${i}`} key={i}>
            <h2>{item?.name}</h2><br/><br/>
            <h3>Discount: {item?.discount} Off</h3>
        </div>
    }) 
    : <h4>Error</h4>} */