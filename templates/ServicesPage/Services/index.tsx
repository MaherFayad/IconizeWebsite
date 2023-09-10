import Link from "next/link";
import cn from "classnames";
import styles from "./Services.module.sass";
import Icon from "@/components/Icon";

import { ServicesType } from "@/types/index";

type ServicesProps = {
    items: ServicesType[];
};

const Services = ({ items }: ServicesProps) => (
    <div className={cn("section-mb136", styles.section)}>
        <div className={"container"}>
            <div className={styles.head}>
                <div className={cn("label", styles.label)}>OUR SERVICE</div>
                <div className={cn("h5", styles.title)}>
                    We provide a wide range of services
                </div>
            </div>
            <div className={styles.list}>
                {items.map((service, index) => (
                    <div className={styles.item} key={service.id}>
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={styles.row}>
                            <div className={cn("h4", styles.subtitle)}>
                                {service.title}
                            </div>
                            <div className={styles.wrap}>
                                <div className={styles.description}>
                                    {service.description}
                                </div>
                                <Link
                                    className={cn("button", styles.button)}
                                    href={`/services/${service.id}`}
                                >
                                    DISCOVER THE SERVICE
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Services;
