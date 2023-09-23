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
            <AboutUs scrollToRef={scrollToRef} />
            <Advantages />
            <Services items={services} />
            <Projects
                className="section-pd"
                title="Explore the brilliance of our top-performing projects"
                label="OUR PROJECTS"
                items={projects}
                viewItem={4}
                viewAll="VIEW ALL PROJECT"
                dark
            />
            <Reviews items={reviews} />
            <Companies
                className="section-mb160"
                info="We built outstanding products for"
                items={companies}
            />
            <Blogs items={blogs} />
        </Layout>
    );
};

export default HomePage;
