import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { clarity } from 'react-microsoft-clarity';


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
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
                    clarity.init(j1aw65gcrm);

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
