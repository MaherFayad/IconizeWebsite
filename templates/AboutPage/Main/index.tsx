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
                        Empowering Companies on the Path to Growth
                    </div>
                </div>
            </div>
            <div className={cn("section-mb120", styles.sectionVideo)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.wrap}>
                        <div className={styles.preview}>
                            <video
                                className={styles.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src="/videos/video-2.mp4"
                                    type="video/mp4"
                                />
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
                    muted
                    loop
                    playsInline
                    controls
                >
                    <source src="/videos/video-2.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    );
};

export default Main;
