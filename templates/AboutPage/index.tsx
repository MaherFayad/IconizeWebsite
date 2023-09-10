import Layout from "@/components/Layout";
import Main from "./Main";
import Story from "./Story";
import Preview from "@/components/Preview";
import Values from "./Values";
import Team from "./Team";
import Companies from "@/components/Companies";
import Description from "./Description";

import { team } from "@/mocks/team";
import { companies } from "@/mocks/companies";

const AboutPage = () => {
    return (
        <Layout>
            <Main />
            <Story />
            <Preview
                className="section-mb160"
                image="/images/image-1.jpg"
                wide
            />
            <Values />
            <Team items={team} />
            <Companies
                className="section-mb160"
                title="Trusted with more than 150 Companies since 2012"
                items={companies}
            />
            <Description />
        </Layout>
    );
};

export default AboutPage;
