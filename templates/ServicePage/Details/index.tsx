import cn from "classnames";
import styles from "./Details.module.sass";
import { services } from "@/mocks/services";





type DetailsProps = {
    id: any;
};

const Details = ({ id }: DetailsProps) => {
    const service = services.find((service) => service.id === id);
    return service ? (
        <>
        <div className={cn("section-mb120", styles.section)}>
            <div className={"container"}>
                <div className={styles.head}>
                    <div className={cn("h5", styles.title)}>
                        {service.details_H1}
                    </div>
                    <div className={styles.text}>
                        {service.details_H2}
                    </div>
                </div>
                <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={cn("label", styles.number)}>
                                1
                            </div>
                            <div className={cn("subtitle", styles.subtitle)}>
                                {service.list1_title}
                            </div>
                            <div className={styles.content}>{service.list1_content}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={cn("label", styles.number)}>
                                2
                            </div>
                            <div className={cn("subtitle", styles.subtitle)}>
                                {service.list2_title}
                            </div>
                            <div className={styles.content}>{service.list2_content}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={cn("label", styles.number)}>
                                3
                            </div>
                            <div className={cn("subtitle", styles.subtitle)}>
                                {service.list3_title}
                            </div>
                            <div className={styles.content}>{service.list3_content}</div>
                        </div>
                </div>
            </div>
        </div>

        </>
    ) : null;
};


export default Details;
