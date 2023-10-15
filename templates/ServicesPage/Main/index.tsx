import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import ButtonCircle from "@/components/ButtonCircle";
import 'swiper/css';
import 'swiper/css/pagination';


const images = [
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-1.jpg?alt=media&token=f15b6ed2-155a-4428-b627-b2dfbe99aafa&_gl=1*1j3ucih*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc0OC41OS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-2.jpg?alt=media&token=4fe5547a-5a6d-4950-bf7a-ea9aab5d891b&_gl=1*1a9kv8d*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc1Ni41MS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-3.jpg?alt=media&token=28dd9a3f-0563-4bc8-af34-29c6ba6a53c1&_gl=1*1432zfs*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc2My40NC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-4.jpg?alt=media&token=06493638-d104-4860-8d5f-42be75ec5828&_gl=1*2ombg5*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc3MS4zNi4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-5.jpg?alt=media&token=23eef4ff-78c3-4252-94b2-140851bd9189&_gl=1*10r9yi5*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc4MC4yNy4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-6.jpg?alt=media&token=e842f1a0-3b34-4d01-855a-a63360b0d114&_gl=1*1o1822l*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc4OC4xOS4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-7.jpg?alt=media&token=f18ac916-0725-4dc5-91fa-03dd180b8835&_gl=1*vfvmws*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2Mzc5Ny4xMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fservices%2Fservice-photo-8.jpg?alt=media&token=6277734f-a652-4bcd-8e29-a38668ee7db1&_gl=1*8lu0ew*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzgwNS4yLjAuMA..",
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
