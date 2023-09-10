import cn from "classnames";
import styles from "./Team.module.sass";
import Item from "./Item";

import { TeamType } from "@/types/index";

type TeamProps = {
    items: TeamType[];
};

const Team = ({ items }: TeamProps) => (
    <div
        className={cn("section-mb160 section-pd section-black", styles.section)}
    >
        <div className={"container"}>
            <div className={cn("label", styles.label)}>MEET THE TEAM</div>
            <div className={cn("h5", styles.title)}>
                Meet multi-talented people who are passionate about their craft.
            </div>
            <div className={styles.list}>
                {items.map((man) => (
                    <Item className={styles.item} item={man} key={man.id} />
                ))}
            </div>
        </div>
    </div>
);

export default Team;
