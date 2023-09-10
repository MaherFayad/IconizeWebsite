import cn from "classnames";
import styles from "./Review.module.sass";
import Image from "@/components/Image";

type ReviewProps = {
    className?: string;
    review: any;
};

const Review = ({ className, review }: ReviewProps) => (
    <div className={cn(className, styles.section)}>
        <div className={"container"}>
            <div className={styles.review}>
                <div className={styles.quote}>
                    <Image
                        src="/images/quote.svg"
                        width={64}
                        height={52}
                        alt="Quote"
                    />
                </div>
                <div className={styles.wrap}>
                    <div className={cn("h6", styles.content)}>
                        {review.content}
                    </div>
                    {review.man && (
                        <div className={styles.author}>
                            <div className={styles.avatar}>
                                <Image
                                    src={review.avatar}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    alt=""
                                />
                            </div>
                            <div className={styles.details}>
                                <div className={cn("h7", styles.man)}>
                                    {review.man}
                                </div>
                                <div className={styles.position}>
                                    {review.position}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default Review;
