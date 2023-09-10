import Layout from "@/components/Layout";
import Mistake from "@/components/Mistake";

const Error404Page = () => {
    return (
        <Layout emptyFooter>
            <Mistake
                number={404}
                title="Sorry, but the page you are looking for might have been removed or is temporarily unavailable."
            />
        </Layout>
    );
};

export default Error404Page;
