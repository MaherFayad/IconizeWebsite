import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import Main from "./Main";

import { blogs } from "@/mocks/blogs";

const ThanksPage = () => {
    return (
        <Layout>
            <Main />
            <Posts items={blogs.slice(0, 2)} />
        </Layout>
    );
};

export default ThanksPage;
