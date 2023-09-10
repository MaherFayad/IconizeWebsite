import { useRef } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Projects from "@/components/Projects";
import Companies from "@/components/Companies";

import { linksProject } from "@/mocks/links";
import { projects } from "@/mocks/projects";
import { companies } from "@/mocks/companies";

const ProjectsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Listing
                title="We are here to support your brands, goods, services, and worldviews."
                links={linksProject}
                scrollToRef={scrollToRef}
            />
            <Projects
                className="section-mb160 section-separator"
                items={projects}
                more
                scrollToRef={scrollToRef}
            />
            <Companies
                className="section-mb160"
                title="Trusted with more than 150 Companies since 2012"
                items={companies}
            />
        </Layout>
    );
};

export default ProjectsPage;
