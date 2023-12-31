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
                    <h1 className={cn("h4", styles.title)}>
                        Thank you for contacting us!
                    </h1>
                    <div className={styles.wrap}>
                        <h3 className={cn("h7", styles.subtitle)}>
                            We have received your message.
                        </h3>
                        <h3 className={styles.content}>
                            We have received your message and will contact you
                            shortly to follow up.
                        </h3>
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
