import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <div className={cn("label", styles.label)}>OUR STORY</div>
            <div className={cn("h6", styles.content)}>
                The only option available to businesses and organizations in the
                age of algorithms, artificial intelligence, and word-of-mouth is
                perfection. A team of strategists, designers, branding
                specialists, business model experts, and service designers has
                been assembled by Keeper. We support our clients in excelling at
                what they do. or grow even more.
            </div>
        </div>
    </div>
);

export default Story;
