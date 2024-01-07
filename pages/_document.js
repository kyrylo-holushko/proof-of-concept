import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return ( 
        <>
            <Head>              
                <meta name="Golden Abalone Bistro" content="demo next app" />
                <meta name="theme-color" content="#fbc02d"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <link rel="stylesheet" href="path/to/materialize.min.css"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Html lang="en">
                <body className="brown lighten-5">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    )
}