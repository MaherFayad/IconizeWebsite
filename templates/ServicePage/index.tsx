import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Preview from "@/components/Preview";
import Plans from "./Plans";
import Gallery from "@/components/Gallery";
import Description from "./Description";
import Companies from "@/components/Companies";
import Projects from "@/components/Projects";

import { companiesLight } from "@/mocks/companies";
import { projects } from "@/mocks/projects";
import { services } from "@/mocks/services";


const gallery = [
    { image: "/images/photo-4.jpg" },
    { image: "/images/photo-5.jpg" },
    { image: "/images/photo-6.jpg" },
    { image: "/images/photo-7.jpg" },
];

const ServicePage = ({ id }: any) => {
    return (
        <Layout>
            <Main id={id} />
            <Details id={id} />
            {/* <Plans />
            <Gallery images={gallery} />
            <Preview className="section-mb160" image="/images/image-2.jpg" />
            <Description /> */}
            <div className="section-pd section-black">
                <Companies
                    className="section-mb120 section-separator"
                    title="We built outstanding products for"
                    items={companiesLight}
                />
                <Projects
                    title="Experience Our Success Stories"
                    label="STORIES"
                    items={projects}
                    viewItem={4}
                    viewAll="VIEW MORE PROJECT"
                    dark
                />
            </div>
        </Layout>
    );
};

export default ServicePage;
