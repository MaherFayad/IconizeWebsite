import Link from "next/link";
import cn from "classnames";
import styles from "./Blogs.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type BlogsProps = {
    items: BlogsType[];
    scrollToRef?: any;
};

const Blogs = ({ items, scrollToRef }: BlogsProps) => (
    <div className={cn("section-mb120", styles.section)}>
        {scrollToRef && <div className={styles.anchor} ref={scrollToRef}></div>}
        <div className={"container"}>
            <div className={styles.list}>
                {items.map((blog) => (
                    <Blog item={blog} key={blog.id} />
                ))}
            </div>
            <button className={cn("button", styles.button)}>LOAD MORE</button>
        </div>
    </div>
);

export default Blogs;
