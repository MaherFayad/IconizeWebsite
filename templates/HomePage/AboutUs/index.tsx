import Link from "next/link";
import cn from "classnames";
import styles from "./AboutUs.module.sass";

type AboutUsProps = {
    scrollToRef: any;
};

const AboutUs = ({ scrollToRef }: AboutUsProps) => (
    <div className={styles.section}>
        <div className={styles.anchor} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <h2 className={cn("label", styles.label)}>ABOUT US</h2>
            <div className={styles.wrap}>
                <h3 className={styles.titleswrap}>
                    <b className={cn("h5", styles.title)}>Why Choose Iconize?</b>
                    <span className={cn("h7", styles.title2)} > Welcome to Iconize, where technology meets expertise! We are a premier software company specializing in comprehensive IT services and consultation. With a proven track record of success, we empower businesses like yours to thrive in the digital age. <br/><br/></span>
                </h3>
                <ul className={styles.list}>
                    <li> <br />
                    <b>1. Expertise You Can Trust</b><br/>
                    Our team of seasoned IT professionals possesses a deep understanding of the industry latest trends and technologies. We stay ahead of the curve to ensure your business remains competitive.                    </li>
                    <li>
                    <br />
                    <b>2. Tailored Solutions</b><br/>
                    We dont believe in one-size-fits-all solutions. At Iconize, we take the time to understand your unique challenges and goals. Then, we craft customized strategies that precisely fit your needs.                    </li>
                </ul>
                <ul className={styles.list}>
                    <li>
                    <b>3. Seamless Integration</b><br/>
                    Our solutions seamlessly integrate into your existing systems, minimizing disruption and maximizing efficiency. We make technology work for you, not the other way around.                    </li>
                    <li>
                    <b>4. Proven Results</b><br/>
                    Our success stories speak for themselves. We have helped numerous businesses achieve remarkable growth, streamline operations, and enhance their overall IT capabilities.                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/about">
                    More about Iconize
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
