import '../styles/globals.css'
import 'materialize-css/dist/css/materialize.min.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

    useEffect(()=>{
        import('materialize-css/dist/js/materialize');
    },[]);

    return <Component {...pageProps} />
}

export default MyApp
