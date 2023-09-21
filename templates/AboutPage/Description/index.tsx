import cn from "classnames";
import styles from "./Description.module.sass";
import Image from "@/components/Image";

const images = [
    "/images/photo-1.jpg",
    "/images/photo-2.jpg",
    "/images/photo-3.jpg",
];

type DescriptionProps = {};

const Description = ({}: DescriptionProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={styles.list}>
                {images.map((image, index) => (
                    <div className={cn("image", styles.image)} key={index}>
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33.33vw"
                            alt=""
                        />
                    </div>
                ))}
                <div className={styles.blockquote}>
                    <div className={styles.quote}>
                        <Image
                            src="/images/quote.svg"
                            width={64}
                            height={52}
                            alt="Quote"
                        />
                    </div>
                    <div className={cn("h6", styles.content)}>
                        I don’t help people with horse problems, I help horses with people problems.
                    </div>
                    <div className={cn("h7B", styles.content)}>
                        <br/> Robert Redford - Horse Whisperer movie.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
