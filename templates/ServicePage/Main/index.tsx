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
                        Like a spotlight, strategic marketing communication
                        enables you to concentrate solely on the audiences you
                        want to reach and the connections you want to make. You
                        can develop potent, targeted, and focused messages by
                        implementing an integrated marketing and communication
                        strategy.
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
                                Like a spotlight, strategic marketing
                                communication enables you to concentrate solely
                                on the audiences you want to reach and the
                                connections you want to make. You can develop
                                potent, targeted, and focused messages by
                                implementing an integrated marketing and
                                communication strategy.
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.info)}>
                                    Get focused with a marketing and
                                    communication plan
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
