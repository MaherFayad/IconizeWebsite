import cn from "classnames";
import styles from "./Results.module.sass";

const result = [
    "A fresh, dynamic website layout that complements their current branding",
    "Created a user journey that makes the user's experience with something as crucial as daycares simpler.",
    "Implemented a CRM to improve client acquisition and client retention",
    "The Hubspot implementation also enables users to get in touch with daycare centers or the Kibe Plus corporate office directly.",
    "With the option to schedule a viewing directly or engage in live chat with us, the website significantly improved its user experience.",
    "Visits to a single page without any interaction, known as the bounce rate, have decreased by 43.26%.",
];

const list = [
    {
        value: "+182%",
        description: "Number of pages view grew",
    },
    {
        value: "+153%",
        description: "Time spent on pages per session",
    },
    {
        value: "+247%",
        description: "Average session duration increased by",
    },
];

type ResultsProps = {};

const Results = ({}: ResultsProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <div className={styles.row}>
                <div className={cn("label", styles.label)}>RESULTS</div>
                <div className={styles.wrap}>
                    <div className={cn("h6", styles.title)}>
                        This is what we have achieved for BocahKecil
                    </div>
                    <div className={styles.result}>
                        {result.map((item, index) => (
                            <div className={styles.box} key={index}>
                                <div className={cn("label", styles.number)}>
                                    {index < 9 ? `0${index + 1}` : index + 1}
                                </div>
                                <div className={styles.content}>{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h3", styles.value)}>
                            {item.value}
                        </div>
                        <div className={styles.description}>
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Results;
