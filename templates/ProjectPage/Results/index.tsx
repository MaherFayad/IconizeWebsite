import cn from "classnames";
import styles from "./Results.module.sass";
import { projects } from "@/mocks/projects";


type ResultsProps = {
    id: any;
};


const Results = ({ id }: ResultsProps) => {
    const project = projects.find((project) => project.id === id) || {
        client: '',
        result1: '',
        result2: '',
        result3: '',
        result4: '',
        list1_value: '',
        list1_description: '',
        list2_value: '',
        list2_description: '',
        list3_value: '',
        list3_description: '',    
    };

    console.log(project);
    
    const result = [
        project.result1,
        project.result2,
        project.result3,
        project.result4,

    ];
    
    const list = [
        {
            value: project.list1_value,
            description: project.list1_description,
        },
        {
            value: project.list2_value,
            description: project.list2_description,
        },
        {
            value: project.list3_value,
            description: project.list3_description,
        },
    ];

    return project ? (
        <>
            <div
                className={cn("section-mb160 section-pd section-black", styles.section)}
            >
                <div className={"container"}>
                    <div className={styles.row}>
                        <div className={cn("label", styles.label)}>RESULTS</div>
                        <div className={styles.wrap}>
                            <div className={cn("h6", styles.title)}>
                                This is what we have achieved for {project.client}
                            </div>
                            <div className={styles.result}>
                                {result.map((item, index) => (
                                    <div className={styles.box} key={index}>
                                        <div className={cn("label", styles.number)}>
                                            {index < 9 ? `0${index + 1}` : index + 1}
                                        </div>
                                        <div className={styles.content}>{item}</div>
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
