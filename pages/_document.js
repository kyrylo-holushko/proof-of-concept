import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return ( 
        <>
            <Head/>
            <Html lang="en">
                <body className="brown lighten-5">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    )
}