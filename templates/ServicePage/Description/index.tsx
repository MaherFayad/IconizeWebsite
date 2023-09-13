import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h5", styles.title)}>
            At Iconize, we start every project with a deep dive into research and analysis. This critical phase lays the foundation for success. Our team meticulously examines market trends, user preferences, and potential challenges. We identify opportunities for innovation and create a strategic roadmap that ensures your software solution aligns perfectly with your business goals. We challenge assumptions, validate concepts, and provide data-driven insights to inform every decision along the way
            </div>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    We can provide you with a custom marketing and communication
                    plan to help you achieve your business objectives. Send us a
                    message to get in touch. Together, we look forward to
                    discovering new areas.
                </div>
                <Link className={cn("button", styles.button)} href="/contact">
                    CONTACT US NOW
                </Link>
            </div>
        </div>
    </div>
);

export default Description;
