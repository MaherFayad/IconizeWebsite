import { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Modal from "@/components/Modal";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                    <b>Get to Know Us:</b> <br/> <span className={cn("h5", styles.title)}>Our Story, Our Team, Our Passion.</span>
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
            <div className={cn("section-mb120", styles.sectionVideo)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.wrap} onClick={() => setVisibleModal(true)}>
                        <div className={styles.preview}  onClick={() => setVisibleModal(true)}>
                            <video
                                className={`${styles.video} ${styles.clickable}`}
                                muted
                                loop
                                playsInline
                                autoPlay
                            >
                                <source
                                    src="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/Videos%2Fvideo-2.mp4?alt=media&token=e114b66e-25d7-4de0-b928-d99101957a9d&_gl=1*w7f1i2*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzUzMy41Ny4wLjA."
                                    type="video/mp4"/>
                            </video>
                        </div>
                        <ButtonCircle
                            className={styles.button}
                            icon="eye"
                            image="/images/play-showreel.svg"
                            onClick={() => setVisibleModal(true)}
                            small
                        />
                    </div>
                </div>
            </div>
            <Modal
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                video
            >
                <video
                    className={styles.videoModal}
                    loop
                    playsInline
                    autoPlay
                    controls
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/Videos%2Fvideo-2.mp4?alt=media&token=e114b66e-25d7-4de0-b928-d99101957a9d&_gl=1*w7f1i2*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzUzMy41Ny4wLjA." type="video/mp4" />
                </video>
            </Modal>
        </>
    );
};

export default Main;
