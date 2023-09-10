import Link from "next/link";
import styles from "./PageListPage.module.sass";

const PageListPage = () => {
    return (
        <div className={styles.list}>
            <Link className={styles.link} href="/">
                Home page
            </Link>
            <Link className={styles.link} href="/about">
                About us page
            </Link>
            <Link className={styles.link} href="/services">
                Services page
            </Link>
            <Link className={styles.link} href="/services/0">
                Service detail page
            </Link>
            <Link className={styles.link} href="/projects">
                Projects page
            </Link>
            <Link className={styles.link} href="/projects/0">
                Project detail page
            </Link>
            <Link className={styles.link} href="/blogs">
                Blogs page
            </Link>
            <Link className={styles.link} href="/blogs/0">
                Blog detail page
            </Link>
            <Link className={styles.link} href="/contact">
                Contact us page
            </Link>
            <Link className={styles.link} href="/thanks">
                Thanks page
            </Link>
            <Link className={styles.link} href="/404">
                404 page
            </Link>
        </div>
    );
};

export default PageListPage;
