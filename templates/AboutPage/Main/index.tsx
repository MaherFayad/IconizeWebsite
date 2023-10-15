import { useState } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import ButtonCircle from "@/components/ButtonCircle";
import Modal from "@/components/Modal";
import Image from "@/components/Image";


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
                        <div className={styles.preview} onClick={() => setVisibleModal(true)}>
                            {/* Replace the video with the Vimeo iframe */}
                            <div style={{ padding: "70% 0 0 0", position: "relative" }}>
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/Videos%2FVideo%20preview.jpg?alt=media&token=a2d84ff8-8df8-4e01-80df-9af8545e916a&_gl=1*1g43vna*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2NjU5Ni40OC4wLjA."
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt=""
                            />
                            </div>
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
                {/* Replace the video inside the Modal with the Vimeo iframe */}
                <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe
                        src="https://player.vimeo.com/video/874491341?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                        title="video-2"
                    ></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </Modal>
        </>
    );
};

export default Main;
