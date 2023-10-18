import type { NextPage } from "next";
import { useRouter } from "next/router";
import ProjectPage from "@/templates/ProjectPage";

const Project: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <ProjectPage id='2' />;
};

export default Project;
