import cn from "classnames";
import styles from "./Details.module.sass";

const list = [
    {
        title: "Analysis",
        content:
            "What's happening right now in the fields of society, economy, and technology are the main topics of the first section, which focuses on the company, its competitors, and the environment? What does it mean going forward?",
    },
    {
        title: "Exploration",
        content:
            "As we investigate various potential communication scenarios, the exploration invites reflection.",
    },
    {
        title: "Strategy",
        content:
            "The strategic phase culminates and lessens uncertainty once a suitable marketing or communication plan is in place. Performance and risk reduction are ensured by the combination of these phases.",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={styles.head}>
                <div className={cn("h5", styles.title)}>
                    The Performance Strategy System
                </div>
                <div className={styles.text}>
                    Keeper uses a special method called The Performance Strategy
                    System to develop brilliant marketing and communication
                    strategies. The convergent and divergent phases of this
                    system alternate.
                </div>
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={cn("h6", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Details;
