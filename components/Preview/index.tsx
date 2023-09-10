import cn from "classnames";
import styles from "./Preview.module.sass";
import Image from "@/components/Image";

type PreviewProps = {
    className?: string;
    classInner?: string;
    title?: string;
    video?: string;
    image?: string;
    wide?: boolean;
};

const Preview = ({
    className,
    classInner,
    title,
    video,
    image,
    wide,
}: PreviewProps) => (
    <div className={cn(className, styles.preview)}>
        <div
            className={cn("container", styles.container, {
                [styles.wide]: wide,
            })}
        >
            <div
                className={cn(
                    styles.inner,
                    {
                        [styles.wide]: wide,
                    },
                    classInner
                )}
            >
                {video && (
                    <video
                        className={styles.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                )}
                {image && (
                    <>
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            alt=""
                        />
                        <div className={styles.overlay}></div>
                    </>
                )}
            </div>
            {title && <div className={styles.title}>{title}</div>}
        </div>
    </div>
);

export default Preview;
