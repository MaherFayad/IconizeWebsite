import cn from "classnames";
import styles from "./Overview.module.sass";

type OverviewProps = {};

const Overview = ({}: OverviewProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>OVERVIEW</div>
            <div className={styles.row}>
                <div className={cn("h7", styles.title)}>
                    It can occasionally seem like a tedious task to find a
                    daycare or a nanny. We improved BocahKecil online presence
                    to make it simpler for parents to get in touch with the
                    daycare they&apos;re considering.
                </div>
                <div className={styles.content}>
                    <p>
                        BocahKecil wanted to find a way to boost sales and
                        improve the usability of their website for both staff
                        and customers. In order to help the team with sales
                        efforts and conduct a more thorough market analysis, it
                        was decided to build a website. It was clear what to do
                        once we learned that they handle more than 100 leads
                        each month.
                    </p>
                    <p>
                        It was time for us to tap into our inner child to
                        kick-start BocahKecil&apos;s rejuvenation. The logo was
                        the only thing we were certain would not change. So our
                        designer made the decision to become familiar with it.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Overview;
