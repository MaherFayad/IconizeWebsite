import cn from "classnames";
import styles from "./Results.module.sass";
import { projects } from "@/mocks/projects";


type ResultsProps = {
    id: any;
};


const Results = ({ id }: ResultsProps) => {
    const project = projects.find((project) => project.id === id);
    
    const result = project?.result || [];

    const list = [
      {
        value: project?.list1_value || "",
        description: project?.list1_description || "",
      },
      {
        value: project?.list2_value || "",
        description: project?.list2_description || "",
      },
      {
        value: project?.list3_value || "",
        description: project?.list3_description || "",
      },
    ];
    return project ? (
        <>
            <div
                className={cn("section-mb160 section-pd section-black", styles.section)}
            >
                <div className={"container"}>
                    <div className={styles.row}>
                        <h2 className={cn("label", styles.label)}>RESULTS</h2>
                        <div className={styles.wrap}>
                            <h3 className={cn("h6", styles.title)}>
                                This is what we have achieved for {project.client}
                            </h3>
                            <div className={styles.result}>
                                {result.map((item, index) => (
                                    <div className={styles.box} key={index}>
                                        <h5 className={cn("label", styles.number)}>
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </h5>
                                        <h6 className={styles.content}>{item}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.list}>
                        {list.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <div className={cn("h5", styles.value)}>
                                    {item.value}
                                </div>
                                <div className={cn("h7B",styles.description)}>
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    ) : null;
};





export default Results;
