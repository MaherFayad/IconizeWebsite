import Link from "next/link";
import cn from "classnames";
import styles from "./ButtonCircle.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type ButtonCircleProps = {
    className?: string;
    icon: string;
    image: string;
    href?: string;
    onClick?: () => void;
    small?: boolean;
};

const ButtonCircle = ({
    className,
    icon,
    image,
    href,
    onClick,
    small,
}: ButtonCircleProps) =>
    href ? (
        <Link
            className={cn(className, styles.button, {
                [styles.buttonSmall]: small,
            })}
            href={href}
        >
            <ButtonInner icon={icon} image={image} />
        </Link>
    ) : (
        <button
            className={cn(className, styles.button, {
                [styles.buttonSmall]: small,
            })}
            onClick={onClick}
        >
            <ButtonInner icon={icon} image={image} />
        </button>
    );

const ButtonInner = ({ icon, image }: any) => (
    <>
        <Icon name={icon} />
        <div className={styles.preview}>
            <Image
                className={styles.image}
                src={image}
                width={196}
                height={196}
                style={{
                    width: "100%",
                    height: "auto",
                }}
                alt="Text"
            />
        </div>
    </>
);

export default ButtonCircle;
