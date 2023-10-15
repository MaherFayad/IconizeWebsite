import Layout from "@/components/Layout";
import Main from "./Main";
import Story from "./Story";
import Preview from "@/components/Preview";
import Values from "./Values";
import Companies from "@/components/Companies";
import Description from "./Description";

import { companies } from "@/mocks/companies";

const AboutPage = () => {
    return (
        <Layout title="About - Iconize" Description="Our story is one of relentless innovation, where each line of code and every pixel designed is infused with our passion for technology. From humble beginnings to becoming a driving force in the digital landscape, Iconize Inc. has always been about transforming ideas into reality, one project at a time. Our journey is your journey, and together, we are crafting a future where innovation knows no bounds.">
            <Main />
            <Story />
            <Preview
                className="section-mb160"
                image="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fimage-1.jpg?alt=media&token=f4b28803-a922-497e-95fd-d71818d61a24&_gl=1*1sm34tr*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM1Njg4Ni4xLjEuMTY5NzM2MzU4Mi44LjAuMA.."
                wide
            />
            <Values />
            {/* <Team items={team} /> */}
            <Companies
                className="section-mb160"
                title="We built outstanding products for"
                items={companies}
            />
            <Description />
        </Layout>
    );
};

export default AboutPage;
