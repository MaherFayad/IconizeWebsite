import cn from "classnames";
import styles from "./Description.module.sass";
import Image from "@/components/Image";

const images = [
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-1.jpg?alt=media&token=7a97017f-4019-4812-9fd9-1a74c67e87a5&_gl=1*ft1o87*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzYxNi42MC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-2.jpg?alt=media&token=7ec0db58-c1e4-4414-b981-60cbf47af5e4&_gl=1*2ntuv4*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzYyMy41My4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fphoto-3.jpg?alt=media&token=a007b1cd-1e32-44c9-9e73-f8bd56c30460&_gl=1*xrcoff*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzYzNC40Mi4wLjA.",
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
                        We don’t help people with horse problems, We help horses with people problems.
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
