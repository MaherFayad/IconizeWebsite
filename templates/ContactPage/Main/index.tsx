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
                        <div className={cn("h4", styles.title)}>
                            Reach Out and Connect:
                        </div>
                        <div className={styles.content}>
                            <p>
                                We are Here to Hear From You.
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
                                <div className={styles.category}>Contact Us</div>
                                <div className={styles.text}>
                                    <a
                                        className={styles.phone}
                                        href="mailto:Contact@iconize.ca"
                                        rel="noopener noreferrer"
                                    >
                                        Contact@iconize.ca
                                    </a>
                                    {/* <a
                                        className={styles.phone}
                                        href="tel:+13439976024"
                                        rel="noopener noreferrer"
                                    >
                                        +1 343 997 6024
                                    </a>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.category}>ADDRESS</div>
                                <div className={styles.text}>
                                    <p>5810 Ambler Drive, Unit 14</p>
                                    <p>CAI 797292,</p>
                                    <p>Mississauga, Ontario, L4W4J5</p>
                                </div>
                             */}
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
