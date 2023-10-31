import cn from "classnames";
import styles from "./Values.module.sass";

const list = [
    {
        title: "We value accessibility",
        content:
            'We create tech solutions that are inclusive and accessible to everyone',
    },
    {
        title: "We're ethical always",
        content:
            "integrity is our compass; we navigate the tech world with honesty and transparency.",
    },
    {
        title: "We leave egos at the door",
        content:
            "We challenge ideas, give candid feedback, and focus on what we agree on. Our goal? Better work, not just curiosity. Time's too valuable for that.",
    },
    {
        title: "We embrace diversity",
        content:
            "We celebrate uniqueness and foster a diverse, inclusive environment where every voice matters.",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <h2 className={cn("label", styles.label)}>OUR VALUES</h2>
            <h3 className={cn("h7", styles.subtitle)}>
                These values capture the essence of Iconize friendly, forward-thinking, and committed to making a positive impact
            </h3>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <h4 className={cn("h5", styles.title)}>
                            {item.title}
                        </h4>
                        <h5 className={styles.content}>{item.content}</h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Values;
