import { useEffect, useState } from "react";
import Link from "next/link";
import TextTransition, { presets } from "react-text-transition";
import cn from "classnames";
import styles from "./Footer.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Socials from "@/components/Socials";

const navigation = [
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Services",
        url: "/services",
    },
    {
        title: "Partners",
        url: "/Partners",
    },
    {
        title: "Projects",
        url: "/projects",
    },
    {
        title: "Blogs",
        url: "/blogs",
    },
    {
        title: "Contact",
        url: "/contact",
    },
];

const socials = [
    {
        icon: "facebook",
        url: "https://www.linkedin.com/in/maherfayad/",
    },
    {
        icon: "twitter",
        url: "https://www.linkedin.com/in/maherfayad/",
    },
    {
        icon: "instagram",
        url: "https://www.linkedin.com/in/maherfayad/",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/maherfayad/",
    },
];

const TEXTS = ["Change", "Progress", "Innovation"];

type FooterProps = {
    empty?: boolean;
};

const Footer = ({ empty }: FooterProps) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            2000
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <footer className={cn(styles.footer, { [styles.footerEmpty]: empty })}>
            <div className={cn("container", styles.container)}>
                {!empty && (
                    <>
                        <div className={styles.row}>
                            <div className={cn("h2", styles.title)}>
                                <span>Ready</span>
                                <span>to Ignite</span>
                                <span>
                                    <span className={styles.word}>
                                        <TextTransition
                                            springConfig={presets.slow}
                                            inline
                                        >
                                            {TEXTS[index % TEXTS.length]}&nbsp;
                                        </TextTransition>
                                    ?
                                    </span>
                                </span>
                            </div>
                            <ButtonCircle
                                className={styles.button}
                                icon="arrow-up-right"
                                image="/images/get-in-touch.svg"
                                href="/contact"
                            />
                        </div>
                    </>
                )}
                <div className={styles.separator}></div>
                {!empty && (
                    <div className={styles.line}>
                        <nav className={styles.navigation}>
                            {navigation.map((link, index) => (
                                <Link
                                    className={styles.link}
                                    href={link.url}
                                    key={index}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                        <Socials items={socials} />
                    </div>
                )}
                <div className={styles.foot}>
                    <div className={styles.copyright}>
                        © 2023 Iconize, All rights reserved 
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
