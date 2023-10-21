import Link from "next/link";
import cn from "classnames";
import styles from "./Blogs.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type BlogsProps = {
    items: BlogsType[];
};

const Blogs = ({ items }: BlogsProps) => (
    <div className={cn("section-black section-pd128", styles.section)}>
        <div className={"container"}>
            <div className={styles.head}>
                <h2 className={cn("label", styles.label)}>OUR BLOGS</h2>
                <h3 className={cn("h5", styles.title)}>
                    At Iconize, our blogs are more than just articles; they are windows into our hearts and minds. We believe in the power of storytelling and sharing insights because we genuinely care about our readers, clients, and the broader community
                </h3>
            </div>
            <div className={styles.list}>
                {items.slice(0, 4).map((blog) => (
                    <Blog item={blog} key={blog.id} light />
                ))}
            </div>
            <div className={styles.btns}>
                <Link
                    className={cn("button-light", styles.button)}
                    href="/blogs"
                >
                    VIEW ALL POSTS
                </Link>
            </div>
        </div>
    </div>
);

export default Blogs;
