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
                    <b>Why Choose Iconize Inc.?</b><br/>
                    <span className="h7" >Welcome to Iconize Inc., where technology meets expertise! We are a premier software company specializing in comprehensive IT services and consultation. With a proven track record of success, we empower businesses like yours to thrive in the digital age.</span></div>
                <ul className={styles.list}>
                    <li>
                    <b>1. Expertise You Can Trust</b><br/>
                    Our team of seasoned IT professionals possesses a deep understanding of the industry's latest trends and technologies. We stay ahead of the curve to ensure your business remains competitive.                    </li>
                    <li>
                    <b>2. Tailored Solutions</b><br/>
                    We don't believe in one-size-fits-all solutions. At Iconize Inc., we take the time to understand your unique challenges and goals. Then, we craft customized strategies that precisely fit your needs.                    </li>
                </ul>
                <ul className={styles.list}>
                    <li>
                        <b>3. Seamless Integration</b><br/>
                        Our solutions seamlessly integrate into your existing systems, minimizing disruption and maximizing efficiency. We make technology work for you, not the other way around.                    </li>
                    <li>
                        <b>4. Proven Results</b><br/>
                        Our success stories speak for themselves. We've helped numerous businesses achieve remarkable growth, streamline operations, and enhance their overall IT capabilities.                    </li>
                </ul>
                <Link className={cn("button", styles.button)} href="/about">
                    LEARN MORE
                </Link>
            </div>
        </div>
    </div>
);

export default AboutUs;
