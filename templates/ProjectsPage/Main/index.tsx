import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import ButtonCircle from "@/components/ButtonCircle";

type MainProps = {};



const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                    <b>Past, Present, Future: </b> <br/> <span className={cn("h5", styles.title)}>Explore Our Portfolio of Projects.</span>
                    </div>
                    <div className={styles.actions}>
                        <ButtonCircle
                            className={styles.button1}
                            icon="arrow-up-right"
                            image="/images/get-in-touch.svg"
                            href="/contact"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
