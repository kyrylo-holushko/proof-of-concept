//import { useEffect, useState } from "react"
import Link from "next/link";
import { useEffect } from "react";

/* if (typeof window !== 'undefined') {
    require('materialize-css');
} */

export default function NavigationBar() {

    useEffect(()=>{     
        const M = require('materialize-css');    
        var elems = document.querySelectorAll('.sidenav');
        var instance = M.Sidenav.init(elems);
    },[])

    return (
        <>
            <nav>
                <div className="nav-wrapper yellow darken-2 no-shadow">
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
                <ul className="left hide-on-med-and-down">
                    <li><Link href="/" className="black-text">Home</Link></li>
                    <li><Link href="/menu" className="black-text">Menu</Link></li>
                    <li><Link href="/contact" className="black-text">Contact</Link></li>
                </ul>
                </div>
            </nav>

            <ul className="sidenav sidenav-close" id="mobile-demo">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
