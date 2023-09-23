import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import ButtonCircle from "@/components/ButtonCircle";

const images = [
    "/images/services/service-photo-1.jpg",
    "/images/services/service-photo-2.jpg",
    "/images/services/service-photo-3.jpg",
    "/images/services/service-photo-4.jpg",
    "/images/services/service-photo-5.jpg",
    "/images/services/service-photo-6.jpg",
    "/images/services/service-photo-7.jpg",
    "/images/services/service-photo-8.jpg",
];

type MainProps = {};



const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                    We help companies find their way to greatness.
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
            <div className={cn("section-mb160", styles.gallery)}>
                <div className={styles.imagesContainer} >
                    <div className={styles.images}>
                        {images.map((image, index) => (
                            <div className={cn("image", styles.image)} key={index}>
                                <Image
                                    src={image}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    alt="Project Images"
                                />
                            </div>
                        ))}
                </div>

                </div>
                <ButtonCircle
                    className={styles.button}
                    icon="arrows"
                    image="/images/drag-to-view.svg"
                    small
                />
            </div>
        </>
    );
};

export default Main;
