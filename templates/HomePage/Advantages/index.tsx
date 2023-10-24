/* eslint-disable react/no-unescaped-entities */
import cn from "classnames";
import Link from "next/link";
import styles from "./Advantages.module.sass";

const list = [
    {
        title: "Projects completed",
        value: "30+",
    },
    {
        title: "Years of tech. experience",
        value: "5",
    },
    {
        title: "Clients Served",
        value: "20+",
    },
    {
        title: "Surveyed users",
        value: "1132",
    },
];

type AdvantagesProps = {};

const Advantages = ({}: AdvantagesProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <h2 className={cn("label", styles.label)}>Achievements at a Glance</h2>
            <div className={cn("section-mb120", styles.row)}>
                <div className={styles.wrap}>
                    <h5 className={cn("h5", styles.title)}>
                        We deliver for you whatever you need
                    </h5>
                    <Link
                        className={cn("button-light", styles.button)}
                        href="/projects"
                    >
                        LET'S WORK TOGETHER
                    </Link>
                </div>
                <h4 className={styles.content}>
                    <p>
                    At Iconize, we believe in measurable success. Our commitment to excellence is reflected in the numbers - real, tangible results that showcase our dedication to helping businesses thrive in the digital world.                    </p>

                </h4>
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h3", styles.counter)}>
                            {item.value}
                        </div>
                        <div className={styles.subtitle}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Advantages;
