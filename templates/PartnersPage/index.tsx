import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Plans from "./Plans";
import Projects from "@/components/Projects";
import { projects } from "@/mocks/projects";



const PartnersPage = () => {
    return (
        <Layout>
            <Main />
            <Plans />
            <Details />
            <div className="section-pd section-black">
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

export default PartnersPage;
