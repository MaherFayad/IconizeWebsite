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
                        {service.title}
                    </div>
                    <div className={cn(styles.content, styles.contentMobile)}>
                        At Iconize, we start every project with a deep dive into research and analysis. This critical phase lays the foundation for success. Our team meticulously examines market trends, user preferences, and potential challenges. We identify opportunities for innovation and create a strategic roadmap that ensures your software solution aligns perfectly with your business goals. We challenge assumptions, validate concepts, and provide data-driven insights to inform every decision along the way
                    </div>
                    <div className={styles.row}>
                        <div className={cn("image", styles.image)}>
                            <Image
                                src="/images/photo-3.jpg"
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
                                At Iconize, we start every project with a deep dive into research and analysis. This critical phase lays the foundation for success. Our team meticulously examines market trends, user preferences, and potential challenges. We identify opportunities for innovation and create a strategic roadmap that ensures your software solution aligns perfectly with your business goals. We challenge assumptions, validate concepts, and provide data-driven insights to inform every decision along the way
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.info)}>
                                    <b>We provide :</b><br/><br/> Literature Review- User Research - Competitive Analysis
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
