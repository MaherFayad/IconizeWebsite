import Layout from "@/components/Layout";
import Main from "./Main";
import Overview from "./Overview";
import Gallery from "./Gallery";
import Review from "@/components/Review";
import Projects from "@/components/Projects";
import Content from "./Content";
import Results from "./Results";
import Screenshots from "./Screenshots";
import Preview from "@/components/Preview";

import { projects } from "@/mocks/projects";

const reviewAuthor = {
    avatar: "/images/avatar-1.jpg",
    man: "Iconize Designers",
    position: "Agency",
    content:
        "We work with both small startups and large corporations.",
};

const ServicePage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Overview id={id} />
            <Gallery id={id} />
            <Content id={id} />
            <Results id={id}/>
            <Projects
                className="section-mb160"
                title="More cases"
                label="OUR PROJECTS"
                description="We work with both small startups and large corporations."
                items={projects}
                viewItem={2}
                viewAll="VIEW ALL PROJECTS"
            />
        </Layout>
    );
};

export default ServicePage;
