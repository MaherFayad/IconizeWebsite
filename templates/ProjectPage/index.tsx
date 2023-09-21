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
    man: "Buster Johnson",
    position: "Director",
    content:
        "Our old website was dated and confusing. We went to Keeper to ask what they could do about it. And they succeeded: The website has a convenient backend and a user flow that is humane and results in higher engagement and conversion.",
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
                viewAll="VIEW ALL PROJECT"
            />
        </Layout>
    );
};

export default ServicePage;
