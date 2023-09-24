import Link from "next/link";
import cn from "classnames";
import styles from "./Mistake.module.sass";

type MistakeProps = {
    number: number;
    title: string;
};

const Mistake = ({ number, title }: MistakeProps) => {
    return (
        <div className={cn("section-main section-brown", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={cn("label", styles.label)}>ERROR {number}</div>
                <div className={cn("h4", styles.title)}>{title}</div>
                <div className={cn("h7", styles.subtitle)}>neither do we</div>
                <Link className="button-light" href="/">
                    BACK TO HOME
                </Link>
            </div>
        </div>
    );
};

export default Mistake;
