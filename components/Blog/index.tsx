import Link from "next/link";
import cn from "classnames";
import styles from "./Blog.module.sass";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

type BlogProps = {
    className?: string;
    item: any;
    light?: boolean;
    cell?: boolean;
};

const Blog = ({ className, item, light, cell }: BlogProps) => (
    <Link
        className={cn(
            styles.blog,
            {
                [styles.blogLight]: light,
                [styles.blogCell]: cell,
            },
            className
        )}
        href={`/blogs/${item.id}`}
    >
        <div className={styles.preview}>
            <Image
                src={item.image}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 767px) 100vw, 50vw"
                alt=""
            />
        </div>
        <div className={styles.details}>
            <div className={cn("h6", styles.title)}>{item.title}</div>
            <div className={styles.line}>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.arrow}>
                <Icon name="arrow-up-right" />
            </div>
        </div>
    </Link>
);

export default Blog;
