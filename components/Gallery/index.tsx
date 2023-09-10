import cn from "classnames";
import styles from "./Gallery.module.sass";
import Image from "@/components/Image";

type ImagesType = {
    image: string;
    title?: string;
};

type GalleryProps = {
    images: ImagesType[];
};

const Gallery = ({ images }: GalleryProps) => (
    <div className={cn("section-mb120", styles.section)}>
        <div className={"container"}>
            <div className={styles.gallery}>
                {images.map((item, index) => (
                    <div className={styles.item} key={index}>
                        <div className={cn("image", styles.image)}>
                            <Image
                                src={item.image}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 50vw"
                                alt=""
                            />
                        </div>
                        {item.title && (
                            <div className={styles.title}>{item.title}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Gallery;
