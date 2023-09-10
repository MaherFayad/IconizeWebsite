import "@/styles/app.sass";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const grotesk = localFont({
    src: [
        {
            path: "../public/fonts/CabinetGrotesk-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/CabinetGrotesk-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/CabinetGrotesk-Bold.woff2",
            weight: "700",
            style: "normal",
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={grotesk.className} id="main">
            <Component {...pageProps} />
        </main>
    );
}
