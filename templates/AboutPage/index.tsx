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
                image="https://firebasestorage.googleapis.com/v0/b/iconize-website.appspot.com/o/images%2Fimage-1.jpg?alt=media&token=ba6486c3-7e0b-4771-8746-f2663de817c3&_gl=1*1fejaaj*_ga*MjAyNTM5Nzk0Mi4xNjk3MzU2ODg2*_ga_CW55HF8NVT*MTY5NzM3MzY1Ny4yLjEuMTY5NzM3Njk3NC41OC4wLjA."
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
