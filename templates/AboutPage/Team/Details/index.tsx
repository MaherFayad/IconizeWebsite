import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";
import Socials from "@/components/Socials";

type DetailsProps = {
    item: any;
};

const Details = ({ item }: DetailsProps) => {
    return (
        <div className={styles.details}>
            <div className={styles.preview}>
                <Image
                    src={item.photo}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                    alt=""
                />
            </div>
            <div className={styles.wrap}>
                <div className={cn("h6", styles.title)}>{item.title}</div>
                <div className={styles.line}>
                    <div className={styles.position}>{item.position}</div>
                    <Socials
                        className={styles.socials}
                        classSocial={styles.social}
                        items={item.socials}
                        dark
                        small
                    />
                </div>
                <div className={styles.description}>{item.description}</div>
            </div>
        </div>
    );
};

export default Details;
