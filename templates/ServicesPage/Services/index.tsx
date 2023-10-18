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
                <h2 className={cn("label", styles.label)}>OUR SERVICE</h2>
                <h4 className={cn("h5", styles.title)}>
                    Diverse Services, Singular Excellence
                </h4>
            </div>
            <div className={styles.list}>
                {items.map((service, index) => (
                    <div className={styles.item} key={service.id}>
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={styles.row}>
                            <h4 className={cn("h4", styles.subtitle)}>
                                {service.title}
                            </h4>
                            <div className={styles.wrap}>
                                <h5 className={styles.description}>
                                    {service.description}
                                </h5>
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
