import Link from "next/link";
import cn from "classnames";
import styles from "./Services.module.sass";
import Icon from "@/components/Icon";

import { ServicesType } from "@/types/index";

type ServicesProps = {
    items: ServicesType[];
};

const Services = ({ items }: ServicesProps) => (
    <div className={cn("section-mb144", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>OUR SERVICE</div>
            <div className={cn("h7", styles.info)}>
                As a 360-degree agency, we provide a variety of services. Our
                devoted team is made up of experts in a variety of disciplines,
                including digital advertising, design, copywriting, web design,
                and more. Please feel free to contact us if there is anything we
                can do to assist you as you peruse the services we offer below.
            </div>
            <div className={styles.list}>
                {items.slice(0, 5).map((service, index) => (
                    <Link
                        className={styles.item}
                        key={service.id}
                        href={`/services/${service.id}`}
                    >
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={styles.title}>{service.title}</div>
                        <div className={styles.arrow}>
                            <Icon name="arrow-up-right" />
                        </div>
                    </Link>
                ))}
            </div>
            <Link className={cn("button", styles.button)} href="/services">
                VIEW ALL SERVICE
            </Link>
        </div>
    </div>
);

export default Services;
