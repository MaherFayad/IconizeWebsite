import cn from "classnames";
import styles from "./Gallery.module.sass";
import Image from "@/components/Image";
import { projects } from "@/mocks/projects";



type GalleryProps = {
    id: any;
};


const Gallery = ({ id }: GalleryProps) => {
    const project = projects.find((project) => project.id === id)|| {
        image_1: '',
        image_2: '',
        image_3: '',
        image_4: '',
    };
    const gallery = [
        project?.image_1,
        project?.image_2,
        project?.image_3,
        project?.image_4,
    ];    
    
    return project ? (
        <>
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

        </>
    ) : null;
};

export default Gallery;
