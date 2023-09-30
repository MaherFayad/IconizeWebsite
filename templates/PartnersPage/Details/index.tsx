import cn from "classnames";
import styles from "./Details.module.sass";
import Companies from "@/components/Companies";
import {Partners} from "@/mocks/Partners";


type DetailsProps = {};

const Details = () => {
    return (
        <>
        <div className={cn("section-mb120", styles.section)}>
            <div className={"container"}>
                <div className={styles.head}>
                    <div className={cn("h5", styles.title)}>
                        Our Current Partners:
                    </div>
                    <div className={styles.text}>
                        Here are some of the esteemed companies that have already partnered with us
                    </div>
                </div>
            </div>
            <div className={cn("container1", styles.container)}>
                <Companies
                    className="section-mb160"
                    items={Partners}
                /> </div>
        </div>

        </>
    );
};


export default Details;
