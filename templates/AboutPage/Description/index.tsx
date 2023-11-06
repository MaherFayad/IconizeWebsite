/* eslint-disable react/no-unescaped-entities */
import cn from "classnames";
import styles from "./Description.module.sass";
import Image from "@/components/Image";


const images = [
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-1.jpg?alt=media&token=a87c798f-a9d6-4f1f-8b08-c26fd0425bed&_gl=1*1omlzrx*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjQ4NC4xOS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-2.jpg?alt=media&token=cf21c6b9-1f09-48d2-92cf-c716edddfc64&_gl=1*1v45353*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjUwMS4yLjAuMA..",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-3.jpg?alt=media&token=e0ad0c05-df13-4a4f-93e4-c61bdc56d008&_gl=1*f4q6au*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjUwOC42MC4wLjA.",
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
                    <h3 className={cn("h6", styles.content)}>
                        We don't help people with horse problems, We help horses with people problems.
                    </h3>
                    <div className={cn("h7B", styles.content)}>
                        <br/> Robert Redford - Horse Whisperer movie.
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Description;
