    import Document, {
        Html,
        Head,
        Main,
        NextScript,
        DocumentContext,
    } from "next/document";
    import ClarityScript from "./api/ClarityScript";
    import BeusableScript from "./api/BeusableScript";    





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
                            content="Iconize"
                            name="Your Trusted Partner for Innovative Solutions"
                        />
                        <meta name="description" content="Your Trusted Partner for Innovative Solutions." />
                        <meta
                            content="Your Trusted Partner for Innovative Solutions"
                            property="og:title"
                        />
                        <meta
                            content="Iconize"
                            property="og:description"
                        />
                        <meta
                            content="/fb-og-image.png"
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
                            content="/twitter-card.png"
                            property="twitter:image"
                        />
                        <meta property="og:type" content="Article" />
                        <meta content="summary" name="twitter:card" />
                        <meta name="twitter:site" content="@ui8" />
                        <meta name="twitter:creator" content="@ui8" />
                        <meta property="fb:admins" content="132951670226590" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1"
                        />
                        
                        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                        <meta name="theme-color" content="#000000" />
                        <meta name="msapplication-TileColor" content="#da532c" />
                        <meta name="theme-color" content="#ffffff" />
                        {/* Global Site Tag (gtag.js) - Google Analytics */}
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=GTM-59LSX77H`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'GTM-59LSX77H', {
                            page_path: window.location.pathname,
                            });
                        `,
                            }}
                        />
                        <script type="text/javascript">
                            ReactDOM.render(<ClarityScript />, document.getElementById(`root`));
                        </script>
                        <script type="text/javascript">
                            ReactDOM.render(<BeusableScript />, document.getElementById(`root`));
                        </script>
                        <script
                            type="text/javascript"
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
                        {/* Google Tag Manager (noscript) */}
                        <noscript>
                            <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-59LSX77H"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                            />
                        </noscript>
                        {/* End Google Tag Manager (noscript) */}
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            );
        }
    }

    export default MyDocument;
