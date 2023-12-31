import type { NextPage } from "next";
import { useRouter } from "next/router";
import ProjectPage from "@/templates/ProjectPage";

const Project: NextPage = () => {
    const router = useRouter();
    const { client } = router.query;

    return <ProjectPage id='0' />;
};

export default Project;
