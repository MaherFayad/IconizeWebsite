import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Companies from "@/components/Companies";
import Projects from "@/components/Projects";
import { companiesLight } from "@/mocks/companies";
import { projects } from "@/mocks/projects";


const ServicePage = ({ id }: any) => {
    return (
        <Layout title="Services - Iconize" Description="Our Expertise, Your Solutions: Discover Our Range of Services.">
            <Main id={id} />
            <Details id={id} />
            <div className="section-pd section-black">
                {/* <Companies
                    className="section-mb120 section-separator"
                    title="We built outstanding products for"
                    items={companiesLight}
                /> */}
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
