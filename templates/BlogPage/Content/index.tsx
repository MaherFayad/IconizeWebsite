import cn from "classnames";
import styles from "./Content.module.sass";

type ContentProps = {
    title: string;
    content: any;
};

const Content = ({ title, content }: ContentProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("h5", styles.title)}>{title}</div>
            <div className={styles.content}>{content}</div>
        </div>
    </div>
);

export default Content;
