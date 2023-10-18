import cn from "classnames";
import styles from "./Story.module.sass";

type StoryProps = {};

const Story = ({}: StoryProps) => (
    <div className={cn("section-mb160", styles.section)}>
        <div className={"container"}>
            <h2 className={cn("label", styles.label)}>OUR STORY</h2>
            <h3 className={cn("h7", styles.content)}>
                Our story is one of relentless innovation, where each line of code and every pixel designed is infused with our passion for technology. From humble beginnings to becoming a driving force in the digital landscape, Iconize Inc. has always been about transforming ideas into reality, one project at a time. Our journey is your journey, and together, we are crafting a future where innovation knows no bounds.
            </h3>
        </div>
    </div>
);

export default Story;
