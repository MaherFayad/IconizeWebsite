import type { NextPage } from "next";
import { useRouter } from "next/router";
import ServicePage from "@/templates/ServicePage";

const Service: NextPage  = () => {
    const router = useRouter();
    const { id } = router.query;

    return <ServicePage id='7' />;
};

export default Service;
