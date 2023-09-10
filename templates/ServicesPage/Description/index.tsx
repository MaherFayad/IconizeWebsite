import Link from "next/link";
import cn from "classnames";
import styles from "./Description.module.sass";

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={styles.col}>
                <div className={cn("h5", styles.title)}>
                    There are no ordinary projects, only extraordinary
                    situations.
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.content}>
                    <p>
                        A strategy needs to be scalable and adaptable in order
                        to be truly effective. We&apos;ll plan your growth,
                        evolution, and renaissance whether your business
                        environment is stable or unstable.
                    </p>
                    <p>
                        Sustainable branding, a distinctive verbal and visual
                        identity, clever and effective communication, or a
                        cohesive creative concept—all of these are products of a
                        pertinent strategy.
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
