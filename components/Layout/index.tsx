import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    background?: string;
    emptyFooter?: boolean;
    children: React.ReactNode;
    title: string;
    Description: string;
};

const Layout = ({ background, emptyFooter, children, title, Description }: LayoutProps) => {
    const { pathname } = useRouter();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="description" content={Description} />
                <meta
                    content={title}
                    name={Description}
                />
            </Head>
            <div
                className={styles.layout}
                style={{ backgroundColor: "#F6F6EE" }}
            >
                <Header />
                <div className={styles.inner}>{children}</div>
                <Footer empty={emptyFooter} />
            </div>
        </>
    );
};

export default Layout;
