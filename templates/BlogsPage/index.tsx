import { useRef } from "react";
import Layout from "@/components/Layout";
import Blogs from "./Blogs";
import Main from "./Main";


import { blogs } from "@/mocks/blogs";

const BlogsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout title="Blogs - Iconize" Description="Our story is one of relentless innovation, where each line of code and every pixel designed is infused with our passion for technology. From humble beginnings to becoming a driving force in the digital landscape, Iconize Inc. has always been about transforming ideas into reality, one project at a time. Our journey is your journey, and together, we are crafting a future where innovation knows no bounds.">
            <Main />
            <Blogs items={blogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
