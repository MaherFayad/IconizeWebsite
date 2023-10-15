import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
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
<<<<<<< HEAD
        
        <Layout>
=======

        <Layout title="Iconize" Description="Welcome to Iconize, where technology meets expertise! We are a premier software company specializing in comprehensive IT services and consultation. With a proven track record of success, we empower businesses, like yours to thrive in the digital age.">

>>>>>>> d4af517b3040d21b80ebade555c39cb5ea90309e
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
                viewAll="VIEW ALL PROJECTS"
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
