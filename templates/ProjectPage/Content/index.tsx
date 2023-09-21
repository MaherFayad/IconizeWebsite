import cn from "classnames";
import styles from "./Content.module.sass";
import { projects } from "@/mocks/projects";


type ContentProps = {
    id: any;
};


const Content = ({ id }: ContentProps) => {
    const project = projects.find((project) => project.id === id);
    const content = project?.content || [];
    const content_title = project?.content_titles || [];
    return project ? (
        <>
            <div className={cn("section-mb160", styles.section)}>
                <div className={"container"}>
                    <div className={styles.row}>
                        <div className={styles.content}>
                            <p>
                            {project.content_1}
                            </p>
                            <div className={styles.content}>
                                {content.map((item, index) => (
                                    <div className={styles.box} key={index}>
                                        <div className={cn("label", styles.number)}>
                                            {index < 9 ? `0${index + 1}` : index + 1} 
                                        </div>
                                        <div className={styles.title}> {content_title[index]} </div>
                                        <div className={styles.content}>{item}</div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        <div className={styles.content}>
                            <p>
                            {project.content_2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    ) : null;
};


export default Content;
