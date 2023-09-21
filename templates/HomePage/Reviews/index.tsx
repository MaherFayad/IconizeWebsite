import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import cn from "classnames";
import styles from "./Reviews.module.sass";
import Image from "@/components/Image";

import { ReviewsType } from "@/types/index";

type ReviewsProps = {
    items: ReviewsType[];
};

const Reviews = ({ items }: ReviewsProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={cn("container", styles.container)}>
            <div className={cn("label", styles.label)}>OUR CLIENTS</div>
            <div className={styles.wrap}>
                <Swiper
                    navigation={true}
                    loop={true}
                    autoHeight={true}
                    speed={500}
                    modules={[Navigation]}
                    className="reviews-swiper"
                >
                    {items.map((item) => (
                        <SwiperSlide className={styles.slide} key={item.id}>
                            <div className={cn("h7", styles.content)}>
                                {item.content}
                            </div>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    <Image
                                        src={item.avatar}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        alt=""
                                    />
                                </div>
                                <div className={styles.details}>
                                    <div className={cn("h7", styles.title)}>
                                        {item.author}
                                    </div>
                                    <div className={styles.position}>
                                        {item.position}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
);

export default Reviews;
