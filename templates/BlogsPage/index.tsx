import { useRef } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Blogs from "./Blogs";

import { linksBlogs } from "@/mocks/links";
import { blogs } from "@/mocks/blogs";

const BlogsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Listing
                title="Sharing is caring so we make time to write about our experience."
                links={linksBlogs}
                scrollToRef={scrollToRef}
            />
            <Blogs items={blogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
