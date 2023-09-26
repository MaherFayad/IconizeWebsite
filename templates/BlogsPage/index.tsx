import { useRef } from "react";
import Layout from "@/components/Layout";
import Blogs from "./Blogs";
import Main from "./Main";


import { blogs } from "@/mocks/blogs";

const BlogsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Main />
            <Blogs items={blogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
