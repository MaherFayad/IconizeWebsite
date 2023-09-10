import cn from "classnames";
import styles from "./Content.module.sass";

type ContentProps = {};

const Content = ({}: ContentProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={styles.row}>
                <div className={styles.content}>
                    <p>
                        We switched from an outdated design that made navigation
                        challenging to a straightforward, contemporary visual
                        journey, which was the major change. Another goal was to
                        make this website as mobile-friendly as possible so that
                        parents who are on the go can quickly browse the
                        available daycares and make reservations with ease.
                    </p>
                    <p>
                        We added a feature that allows users to schedule
                        appointments online to visit the daycare or meet the
                        nanny.
                    </p>
                </div>
                <div className={styles.content}>
                    <p>
                        With the help of the Focusspot implementation, we have
                        made it simpler for current and potential new customers
                        to get in touch with their daycares or the Keeper
                        corporate office. By ensuring that the business can
                        contact its clients, this will also help with client
                        retention.
                    </p>
                    <p>
                        Additionally, adding a live chat feature enhances the
                        website&apos;s ability to establish direct contact,
                        improving user experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Content;
