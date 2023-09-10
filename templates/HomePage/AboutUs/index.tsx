import Link from "next/link";
import cn from "classnames";
import styles from "./AboutUs.module.sass";

type AboutUsProps = {
    scrollToRef: any;
};

const AboutUs = ({ scrollToRef }: AboutUsProps) => (
    <div className={cn("section-separator section-mb160", styles.section)}>
        <div className={styles.anchor} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={cn("label", styles.label)}>ABOUT US</div>
            <div className={styles.wrap}>
                <div className={cn("h5", styles.title)}>
                    We have put together a special combination of strategy,
                    marketing, design, and digital expertise.
                </div>
                <ul className={styles.list}>
                    <li>
                        Companies and organizations have no choice but to
                        achieve perfection in a world of algorithms, artificial
                        intelligence, and word-of-mouth.
                    </li>
                    <li>
                        Keeper has assembled a group of strategists, designers,
                        branding experts, business model specialists, and
                        service designers. We assist our clients in excelling in
                        their fields. or even more powerful.
                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/about">
                    LEARN MORE
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
