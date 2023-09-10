import cn from "classnames";
import Link from "next/link";
import styles from "./Advantages.module.sass";

const list = [
    {
        title: "Years of Experience",
        value: "10+",
    },
    {
        title: "Satisfied Customers",
        value: "150+",
    },
    {
        title: "Awards Won",
        value: "10+",
    },
    {
        title: "Completed Projects",
        value: "200+",
    },
];

type AdvantagesProps = {};

const Advantages = ({}: AdvantagesProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <div className={cn("label", styles.label)}>WHY CHOOSE US</div>
            <div className={cn("section-mb120", styles.row)}>
                <div className={styles.wrap}>
                    <div className={cn("h5", styles.title)}>
                        We deliver for you whatever you need
                    </div>
                    <Link
                        className={cn("button-light", styles.button)}
                        href="/projects"
                    >
                        LET’S WORK TOGETHER
                    </Link>
                </div>
                <div className={styles.content}>
                    <p>
                        More than 30 campaign managers and specialists on the
                        Keeper team will plan and design a powerful campaign
                        specifically for you. Our expertise is in developing
                        competitive advantages. We have faith in capability. To
                        help you differentiate your business from the
                        competition, we employ cutting-edge strategies, digital
                        tools, design, and creative thinking.
                    </p>
                    <p>
                        We do more than just build websites and Facebook pages
                        and buy advertising space; we are a communication
                        agency. We introduce your name, item, or service to the
                        consumer. To help your business succeed, we work in
                        branding, digital marketing, art direction, and
                        printing.
                    </p>
                </div>
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
