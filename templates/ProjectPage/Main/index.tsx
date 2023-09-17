import cn from "classnames";
import styles from "./Main.module.sass";
import Preview from "@/components/Preview";

import { projects } from "@/mocks/projects";

type MainProps = {
    id: any;
};

const Main = ({ id }: MainProps) => {
    const project = projects.find((project) => project.id === id);

    return project ? (
        <>
            <div className={cn("section-main section-brown", styles.section)}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.category}>Client</div>
                            <div className={styles.value}>{project.client}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>Year</div>
                            <div className={styles.value}>{project.year}</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}>Services</div>
                            {project.categories.map((category, index) => (
                                <div className={styles.value} key={index}>
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cn("h4", styles.title)}>
                        {project.title}
                    </div>
                </div>
            </div>
            <Preview
                className={cn("section-mb120", styles.preview)}
                image={project.image}
            />
        </>
    ) : null;
};

export default Main;
