import { useRef } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Form from "../Form";
import Socials from "@/components/Socials";

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

type MainProps = {};

const Main = ({}: MainProps) => {
    const scrollToRef = useRef<any>(null);

    return (
        <div className={cn("section-main section-brown", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.wrap}>
                        <div className={cn("h2", styles.title)}>
                            Let’s work together!
                        </div>
                        <div className={styles.content}>
                            <p>
                                Let us help you become even greater at what you
                                do.
                            </p>
                            <p>
                                Fill out the following form and we will get back
                                to you in the next 24 hours.
                            </p>
                        </div>
                    </div>
                    <ButtonCircle
                        className={styles.button}
                        icon="arrow-down-right"
                        image="/images/get-in-touch.svg"
                        onClick={() =>
                            scrollToRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                    />
                </div>
                <div className={styles.row}>
                    <div className={styles.anchor} ref={scrollToRef}></div>
                    <Form />
                    <div className={styles.sidebar}>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.category}>CALL US</div>
                                <div className={styles.text}>
                                    <a
                                        className={styles.phone}
                                        href="tel:+112158973027"
                                        rel="noopener noreferrer"
                                    >
                                        +11 2158 973027
                                    </a>
                                    <a
                                        className={styles.phone}
                                        href="tel:+114845996738"
                                        rel="noopener noreferrer"
                                    >
                                        +11 4845 996738
                                    </a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.category}>ADDRESS</div>
                                <div className={styles.text}>
                                    <p>2154 Glen Falls Road</p>
                                    <p>Plymouth Meeting,</p>
                                    <p>Pennsylvania(PA), 19462</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Socials items={socials} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
