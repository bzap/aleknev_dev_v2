import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/styles.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "@fontsource-variable/azeret-mono";

const theme = extendTheme({
    fonts: {
        heading: `'Azeret Mono Variable', sans-serif`,
        body: `'Azeret Mono Variable', sans-serif`,
    },
});

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Head>
                    <meta name="googlebot" content="noindex,nofollow" />
                    <meta name="google" content="nositelinkssearchbox" />
                    <meta name="google" content="notranslate" />
                    <meta name="robots" content="noindex" />
                    <title>Welcome!</title>
                </Head>
                <Component {...pageProps} key={router.route} />
                <Analytics />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
