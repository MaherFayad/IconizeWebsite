import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Preview from "@/components/Preview";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Advantages from "./Advantages";
import Projects from "@/components/Projects";
import Reviews from "./Reviews";
import Companies from "@/components/Companies";
import Blogs from "./Blogs";

import { services } from "@/mocks/services";
import { projects } from "@/mocks/projects";
import { reviews } from "@/mocks/reviews";
import { companies } from "@/mocks/companies";
import { blogs } from "@/mocks/blogs";

const HomePage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Preview
                className="section-mb120"
                video="/videos/video-1.mp4"
                wide
            />
            <AboutUs scrollToRef={scrollToRef} />
            <Services items={services} />
            <Advantages />
            <Projects
                className="section-mb160 section-separator"
                title="Take a look at our most successful projects"
                label="OUR PROJECTS"
                items={projects}
                viewItem={4}
                viewAll="VIEW ALL PROJECT"
            />
            <Reviews items={reviews} />
            <Companies
                className="section-mb160"
                info="Trusted by 150+ Companies"
                items={companies}
            />
            <Blogs items={blogs} />
        </Layout>
    );
};

export default HomePage;
