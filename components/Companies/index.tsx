import cn from "classnames";
import styles from "./Companies.module.sass";
import Image from "@/components/Image";

import { CompaniesType } from "@/types/index";

type CompaniesProps = {
    className?: string;
    title?: string;
    info?: string;
    items: CompaniesType[];
};

const Companies = ({ className, title, info, items }: CompaniesProps) => (
    <div className={cn(styles.section, className)}>
        <div className={"container1"}>
            {title && <div className={cn("h6", styles.title)}>{title}</div>}
            {info && <div className={cn("h7", styles.info)}>{info}</div>}
            <div className={styles.list}>
                {items.map((item) => (
                    <div className={styles.preview} key={item.id}>
                        <Image
                            src={item.image}
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="(max-width: 768px) 50vw, (max-width: 1023px) 33vw, 20vw"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Companies;
