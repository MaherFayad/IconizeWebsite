import cn from "classnames";
import styles from "./Details.module.sass";

const list = [
    {
        title: "User Research",
        content:
            "In this initial step, gather data and insights about your target audience. Conduct surveys, interviews, and observations to understand user behaviors, preferences, and pain points. Create user personas to represent different segments of your audience, helping to personalize your design approach.",
    },
    {
        title: "Competitive Analysis",
        content:
            "Examine competitors and similar products or services in your market. Identify their strengths and weaknesses, and analyze user feedback and reviews. This research helps you understand market trends, benchmark your design against industry standards, and uncover opportunities for differentiation.",
    },
    {
        title: "Information Architecture",
        content:
            "Organize and structure the content and features of your design. Develop site maps and user flows to create a logical hierarchy and navigation system. Conduct a content audit to assess the relevance and effectiveness of existing content, ensuring it aligns with user needs and goals. This step lays the foundation for creating user-friendly interfaces and seamless user experiences.",
    },
];

type DetailsProps = {};

const Details = ({}: DetailsProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={styles.head}>
                <div className={cn("h5", styles.title)}>
                    Ready to Bring Your Ideas to Life?
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
                        <div className={cn("subtitle", styles.subtitle)}>
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
