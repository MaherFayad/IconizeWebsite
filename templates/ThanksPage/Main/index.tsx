import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Preview from "@/components/Preview";

type MainProps = {};

const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                        Thank you for contacting us!
                    </div>
                    <div className={styles.wrap}>
                        <div className={cn("h7", styles.subtitle)}>
                            We have received your message.
                        </div>
                        <div className={styles.content}>
                            We have received your message and will contact you
                            shortly to follow up.
                        </div>
                        <Link
                            className={cn("button-light", styles.button)}
                            href="/"
                        >
                            BACK TO HOME
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
