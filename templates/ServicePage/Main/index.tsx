import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";

import { services } from "@/mocks/services";


type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const service = services.find((service) => service.id === id);

    return service ? (
        <>
            <div
                className={cn(
                    "section-main section-brown section-mb120",
                    styles.section
                )}
            >
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                        {service.description_H1}
                    </div>
                    <div className={cn(styles.content, styles.contentMobile)}>
                        {service.description_H2}
                    </div>
                    <div className={styles.row}>
                        <div className={cn("image", styles.image)}>
                            <Image
                                src="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-3.jpg?alt=media&token=e0ad0c05-df13-4a4f-93e4-c61bdc56d008&_gl=1*hn3ch1*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjY3OC40Ni4wLjA."
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt=""
                            />
                        </div>
                        <div className={styles.wrap}>
                            <div
                                className={cn(
                                    styles.content,
                                    styles.contentDesktop
                                )}
                            >
                                {service.description_H2}
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.info)}>
                                    <b>We provide :</b><br/><br/> {service.description_H3}
                                </div>
                                <Link
                                    className={cn("button", styles.button)}
                                    href="/contact"
                                >
                                    MAKE YOUR SELF HEARD
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

export default Main;
