import cn from "classnames";
import styles from "./Screenshots.module.sass";
import Image from "@/components/Image";
import Preview from "@/components/Preview";

const screenshots = [
    {
        src: "/images/screenshot-1.jpg",
        width: 620,
        height: 920,
    },
    {
        src: "/images/screenshot-2.jpg",
        width: 620,
        height: 920,
    },
    {
        src: "/images/screenshot-3.jpg",
        width: 620,
        height: 920,
    },
];

type ScreenshotsProps = {};

const Screenshots = ({}: ScreenshotsProps) => (
    <>
        <div className={cn("section-mb120", styles.section)}>
            <div className={"container"}>
                <div className={styles.images}>
                    {screenshots.map((image, index) => (
                        <div className={styles.image} key={index}>
                            <Image
                                src={image.src}
                                width={image.width}
                                height={image.height}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }}
                                alt="Screenshots"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Preview
            className={cn(
                "section-mb120 section-separator",
                styles.sectionPreview
            )}
            image="/images/screenshot-4.jpg"
        />
    </>
);

export default Screenshots;
