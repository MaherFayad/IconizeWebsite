import { useRef } from "react";
import cn from "classnames";
import styles from "./Main.module.sass";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Companies from "@/components/Companies";
import Main from "./Main";


import { projects } from "@/mocks/projects";
import { companies } from "@/mocks/companies";

const ProjectsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout title="Project - Iconize" Description="Past, Present, Future: Explore Our Portfolio of Projects.">
            <Main />
            <Projects
                className="section-mb160"
                items={projects}
                more
                scrollToRef={scrollToRef}
            /> 
            <div className={cn("container1", styles.container)}>
                <Companies
                    className="section-mb160"
                    title="We built outstanding products for"
                    items={companies}
                /> </div>
        </Layout>
    );
};

export default ProjectsPage;
