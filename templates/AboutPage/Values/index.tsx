import cn from "classnames";
import styles from "./Values.module.sass";

const list = [
    {
        title: "We have a strong passion.",
        content:
            'The boundaries between "work" and "play" aren&apos;t always obvious. We are all connected and motivated by our curiosity and creativity. Staying in your comfort zone is never a good idea in our opinion.',
    },
    {
        title: "We enjoy learning.",
        content:
            "We enjoy learning, particularly from one another. We are always improving our abilities in design, development, and copywriting as well as learning how to use new platforms and features. Because lifelong learners are the best learners.",
    },
    {
        title: "We leave egos at the door.",
        content:
            "We challenge ideas and offer candid criticism, but we also emphasize the points in which we agree. We will challenge things in order to produce better work, but never merely out of curiosity. There isn't time for that.",
    },
    {
        title: "We support one another.",
        content:
            "Our days are spent constructing sites and strengthening one another. An opportunity to interact, work together, and recognize our clients and coworkers arises with each new project. We're in this together and for the long haul.",
    },
];

type ValuesProps = {};

const Values = ({}: ValuesProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>OUR VALUES</div>
            <div className={cn("h7", styles.subtitle)}>
                Here are the four guidelines we stick to protect you in these
                shifting environments.
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("h5", styles.title)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Values;
