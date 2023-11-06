/* eslint-disable @next/next/next-script-for-ga */
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { Partytown } from '@builder.io/partytown/react';


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang="en" id="root">
                <Head>
                    <meta
                        content="Your Trusted Partner for Innovative Solutions"
                        property="og:title"
                    />
                    <meta
                        content="Iconize"
                        property="og:description"
                    />
                    <meta
                        content="/fb-og-image.jpg"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content=""
                    />
                    <meta
                        property="og:site_name"
                        content="Your Trusted Partner for Innovative Solutions"
                    />
                    <meta
                        content="Your Trusted Partner for Innovative Solutions"
                        property="twitter:title"
                    />
                    <meta
                        content="Iconize"
                        property="twitter:description"
                    />
                    <meta
                        content="/twitter-card.jpg"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@Iconize.ca" />
                    <meta name="twitter:creator" content="@Iconize.ca" />
                    <meta property="fb:admins" content="132951670226590" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />

                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <Partytown debug={true} forward={['dataLayer.push']} />
                    <script async type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-H27RSW8ED1" />
                    <script
                        type="text/partytown"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          
                            gtag('config', 'G-H27RSW8ED1');
                                                          `,
                        }}/>
                    <script
                        async
                        type="text/partytown"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w, d, a) {
                                    w.__beusablerumclient__ = {
                                    load: function(src) {
                                        var b = d.createElement("script");
                                        b.src = src;
                                        b.async = true;
                                        b.type = "text/javascript";
                                        d.getElementsByTagName("head")[0].appendChild(b);
                                    }
                                    };
                                    w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
                                })(window, document, "//rum.beusable.net/load/b230930e134632u394");
                                `,
                        }}
                    />
                    <script
                        async
                        id="ms-clarity"
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "j1aw65gcrm");`,
                        }}
                    />


                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
