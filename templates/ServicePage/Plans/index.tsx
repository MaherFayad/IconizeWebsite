import cn from "classnames";
import styles from "./Plans.module.sass";

const list = [
    {
        title: "Full potential analysis",
        content:
            'Like our brains, brands and businesses typically only utilize a portion of their potential. The first step to highlighting and identifying the areas and points for improvement is to strive to reach your "full potential."',
    },
    {
        title: "We develop individualized tactics",
        content:
            "Keeper's distinctive strategy is called the Performance Strategy System. This method was created, thoroughly examined, and improved upon using our years of experience.",
    },
    {
        title: "We identify your potential",
        content:
            "With the Full Potential Analysis, we created a tool to assess the strengths and weaknesses of both you and your rivals. This gives us the ability to direct your strategy in the right direction.",
    },
    {
        title: "360 agency",
        content:
            "We use our creative and strategic experience and knowledge to develop your effective marketing and communication plan, incorporating everything from traditional advertising to digital strategies and public relations.",
    },
];

type PlansProps = {};

const Plans = ({}: PlansProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={cn("h5", styles.title)}>
                Keeper is the best partner for your marketing and communication
                plans
            </div>
            <div className={styles.list}>
                {list.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("label", styles.number)}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className={cn("h7", styles.subtitle)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Plans;
