import cn from "classnames";
import styles from "./Overview.module.sass";
// import Project from "pages/projects/[id]";
import { projects } from "@/mocks/projects";


type OverviewProps = {
    id: any;
};


const Overview = ({ id }: OverviewProps) => {
    const project = projects.find((project) => project.id === id);
    return project ? (
        <>
                <div className={cn("section-mb120", styles.section)}>
                <div className={"container"}>
                    <h2 className={cn("label", styles.label)}>OVERVIEW</h2>
                    <div className={styles.row}>
                        <h3 className={cn("h7", styles.title)}>
                            {project.overview_1}
                        </h3>
                        <h4 className={styles.content}>
                            <p>
                                {project.overview_2}
                            </p>
                        </h4>
                    </div>
                </div>
            </div>

        </>
    ) : null;
};

export default Overview;
