import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="Iconize"
                        name="Your Trusted Partner for Innovative Solutions"
                    />
                    <meta
                        content="Your Trusted Partner for Innovative Solutions"
                        property="og:title"
                    />
                    <meta
                        content="Iconize"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
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
                        content="%PUBLIC_URL%/twitter-card.png"
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
                    <link rel="icon" type="image/x-icon" href="public/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
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
