//import { useEffect, useState } from "react"
import { Icon, Navbar, NavItem } from "react-materialize"

if (typeof window !== 'undefined') {
    require('materialize-css');
}


export default function NavigationBar() {

   //const [M, setM] = useState(()=>()=>null);

    /* const mObj = dynamic(() => import('materialize-css').then((res)=>console.log(res)), {
        ssr: false,
    }); */

    /* async function materialize() {
        const M = await import("materialize-css");
        M.AutoInit();
    } */
        /* import('materialize-css').then(
            (
              { default: comp } // get the import from the returned object
            ) => setM(() => comp) // use updater function to set in state
        ); */  
            //const M = require('materialize-css');
            //M.AutoInit();
            //const { Icon } = require('react-materialize');
       
        
        
        //import("materialize-css");
        //setM(mObj.M);
        //M.AutoInit();
        //setM(M);
        //M.AutoInit();
  
    //
    return (
        <>
            <Navbar menuIcon={<Icon>menu</Icon>}>
                <NavItem>First</NavItem>
                <NavItem>Second</NavItem>
                <NavItem>Third</NavItem>
            </Navbar>
        </>
    )
}