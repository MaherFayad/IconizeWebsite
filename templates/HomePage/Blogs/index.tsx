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
                <div className={cn("label", styles.label)}>OUR BLOGS</div>
                <div className={cn("h5", styles.title)}>
                    Sharing is caring so we make time to write about our
                    experience.
                </div>
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
