import cn from "classnames";
import styles from "./Plans.module.sass";

const list = [
    {
        title: "Access to Industry Expertise",
        content:
            'Tap into our extensive knowledge and experience in IT services and consultation.'
    },
    {
        title: "Expand Your Reach",
        content:
            'Partnering with Iconize can help you reach new markets and customers.'
    },
    {
        title: "Enhanced Capabilities",
        content:
            'Benefit from our cutting-edge technology and innovative solutions.'
    },
];

type PlansProps = {};

const Plans = ({}: PlansProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={styles.title}>
                <span className={cn("h5", styles.title)}>Why Partner with Iconize:</span> 
                <br /> <span className={cn("bodyM",styles.content)}><br />At Iconize, we pride ourselves on our expertise, commitment to excellence, and a proven track record in the IT industry. Partnering with us offers several advantages:</span>
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
