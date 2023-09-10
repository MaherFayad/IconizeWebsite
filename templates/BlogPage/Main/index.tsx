import cn from "classnames";
import styles from "./Main.module.sass";
import Preview from "@/components/Preview";

import { blogs } from "@/mocks/blogs";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const blog = blogs.find((blog) => blog.id === id);

    return blog ? (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.date}>{blog.date}</div>
                    <div className={cn("h4", styles.title)}>{blog.title}</div>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.category}>Written by</div>
                            <div className={styles.text}>{blog.author}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>Category</div>
                            <div className={styles.text}>{blog.category}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Preview className="section-mb120" image={blog.image} wide />
        </>
    ) : null;
};

export default Main;
