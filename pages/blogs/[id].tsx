import type { NextPage } from "next";
import { useRouter } from "next/router";
import BlogPage from "@/templates/BlogPage";

const Blog: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <BlogPage id={id} />;
};

export default Blog;
