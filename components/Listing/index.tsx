import { useState } from "react";
import cn from "classnames";
import styles from "./Listing.module.sass";
import ButtonCircle from "@/components/ButtonCircle";


import { LinksType } from "@/types/index";

type ListingProps = {
    title: string;
    links: LinksType[];
    scrollToRef?: any;
};

const Listing = ({ title, links, scrollToRef }: ListingProps) => {
    const [active, setActive] = useState<string>(links[0].value);

    const handleClick = (value: string) => {
        setActive(value);
        scrollToRef &&
            scrollToRef.current.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <div
            className={cn(
                "section-main section-mb120 section-brown",
                styles.section
            )}
        >
            <div className={cn("container", styles.container)}>
                <div className={cn("h4", styles.title)}>{title}</div>
                <div className={styles.actions}>
                    <ButtonCircle
                        className={styles.button}
                        icon="arrow-up-right"
                        image="/images/get-in-touch.svg"
                        href="/contact"
                    />
                </div>

            </div>
        </div>
    );
};

export default Listing;
