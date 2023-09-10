import cn from "classnames";
import styles from "./Socials.module.sass";
import Icon from "@/components/Icon";

type ItemsType = {
    icon: string;
    url: string;
};

type SocialsProps = {
    className?: string;
    classSocial?: string;
    items: ItemsType[];
    dark?: boolean;
    small?: boolean;
};

const Socials = ({
    className,
    classSocial,
    items,
    dark,
    small,
}: SocialsProps) => (
    <div className={cn(styles.socials, className)}>
        {items.map((social, index) => (
            <a
                className={cn(
                    styles.social,
                    { [styles.socialDark]: dark, [styles.socialSmall]: small },
                    classSocial
                )}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
            >
                <Icon name={social.icon} />
            </a>
        ))}
    </div>
);

export default Socials;
