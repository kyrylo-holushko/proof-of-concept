import { Html, Head, Main, NextScript } from 'next/document'
//brown lighten-5
export default function Document() {

    return ( 
        <>
            <Head>              
                <meta name="Golden Abalone Bistro" content="demo next app" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
                <link rel="stylesheet" href="path/to/materialize.css"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Html lang="en">
                <body className="white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    )
}