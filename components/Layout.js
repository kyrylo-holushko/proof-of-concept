import NavigationBar from "./NavigationBar"
import FooterBar from "./FooterBar"
import { useEffect, useState } from 'react'
//import dynamic from "next/dynamic";
//import M from 'materialize-css'
import { NavItem, Navbar } from "react-materialize"

export default function Layout(props){

    useEffect(()=>{
        /* console.log("FIRST");
        if(typeof window !=='undefined'){
            console.log("Window loaded!");
            const M = dynamic(() => import('materialize-css'), {
                ssr: false,
            });
            console.log(M);
        } */
    },[]);

    return(
        <>
            <NavigationBar/>
                {props.children}
            <FooterBar/>
        </>
    )
}