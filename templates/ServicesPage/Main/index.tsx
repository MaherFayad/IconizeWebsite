import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import ButtonCircle from "@/components/ButtonCircle";
import 'swiper/css';
import 'swiper/css/pagination';


const images = [
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-1.jpg?alt=media&token=4e9a3fb4-cad9-4a0b-b7f8-eb764c605c2e&_gl=1*1xpgns*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjcwNi4xOC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-2.jpg?alt=media&token=75adebc2-96f3-4284-a19d-77678144fd2e&_gl=1*14sx0ze*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjcyNS42MC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-3.jpg?alt=media&token=d4a17c10-0192-4976-9b81-ec89a25be20c&_gl=1*1a27611*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3NjczMi41My4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-4.jpg?alt=media&token=2f64d90e-f871-4fb2-8ec3-534f78fa2d7a&_gl=1*1f0f7xl*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njc0MC40NS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-5.jpg?alt=media&token=69e3fc24-0c3e-42ec-997b-d72d8e8bd12a&_gl=1*yadv0d*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njc0OC4zNy4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-6.jpg?alt=media&token=46d9df53-7780-4410-b959-ff6ee9436b10&_gl=1*3z124o*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njc1Ny4yOC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-7.jpg?alt=media&token=8be414f8-1c2e-4095-8b35-0a2327e57185&_gl=1*15htmnc*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njc2NS4yMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-8.jpg?alt=media&token=3f8fc94e-1bfc-4122-98c2-fa1abd5e8123&_gl=1*atl1zz*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njc3My4xMi4wLjA.",
];

type MainProps = {};



const Main = ({}: MainProps) => {
    return (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={cn("h4", styles.title)}>
                    <b>Our Expertise, Your Solutions:</b> <br/> <span className={cn("h5", styles.title)}>Discover Our Range of Services.</span>
                    </div>
                    <div className={styles.actions}>
                        <ButtonCircle
                            className={styles.button1}
                            icon="arrow-up-right"
                            image="/images/get-in-touch.svg"
                            href="/contact"
                        />
                    </div>
                </div>
            </div>
            <div className={cn("section-mb160", styles.gallery)}>
                <div className={styles.imagesContainer} >
                    <Swiper
                        slidesPerView={'auto'}
                        loop
                        className={styles.images}>

                        {images.map((image, index) => (
                            <SwiperSlide className={cn("image", styles.image)} key={index}>
                                <Image
                                    src={image}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    alt="Project Images"
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>

                </div>
                <ButtonCircle
                    className={styles.button}
                    icon="arrows"
                    image="/images/drag-to-view.svg"
                    small
                />
            </div>
        </>
    );
};

export default Main;
