import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.col}>
                <div className={cn("h5", styles.title)}>
                    Ready to Bring Your Ideas to Life?
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                    <p>
                        Our vision is simple yet powerful: to innovate, create, and transform. We are driven by a passion for turning ideas into reality, leveraging meticulous research, captivating design, precise development, and unwavering quality. Our mission is to lead businesses into a digital future where their visions come to life, ensuring that excellence is at the heart of every project.
                    </p>
                    <p>
                        We craft software solutions that inspire, engage, and excel. Our vision is to empower businesses, revolutionize industries, and make digital dreams a vibrant, accessible reality.
                    </p>
                </div>
                <Link className="button" href="/contact">
                    GET IN TOUCH
                </Link>
            </div>
        </div>
    </div>
);

export default Description;
