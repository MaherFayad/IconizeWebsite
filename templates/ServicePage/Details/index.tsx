import cn from "classnames";
import styles from "./Details.module.sass";
import { services } from "@/mocks/services";





type DetailsProps = {
    id: any;
};

const Details = ({ id }: DetailsProps) => {
    const service = services.find((service) => service.id === id);
    const list = [
        {
            title: service.list1_title,
            content: service.list1_content,
        },
        {
            title: service.list2_title,
            content: service.list2_content,
        },
        {
            title: service.list3_title,
            content: service.list3_content,
        },
    ];
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
                    {list.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <div className={cn("label", styles.number)}>
                                {index < 9 ? `0${index + 1}` : index + 1}
                            </div>
                            <div className={cn("subtitle", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </>
    ) : null;
};


export default Details;
