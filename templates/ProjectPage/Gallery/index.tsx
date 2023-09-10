import cn from "classnames";
import styles from "./Gallery.module.sass";
import Image from "@/components/Image";

const gallery = [
    "/images/photo-8.jpg",
    "/images/photo-9.jpg",
    "/images/photo-10.jpg",
    "/images/photo-11.jpg",
];

type GalleryProps = {};

const Gallery = ({}: GalleryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={styles.gallery}>
                {gallery.map((image, index) => (
                    <div className={cn("image", styles.image)} key={index}>
                        <Image
                            src={image}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 767px) 100vw, 50vw"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Gallery;
