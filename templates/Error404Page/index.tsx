import Layout from "@/components/Layout";
import Mistake from "@/components/Mistake";

const Error404Page = () => {
    return (
        <Layout title="404 - Iconize" Description="you don't know where you are? Neither do we neither do we" emptyFooter>
            <Mistake
                number={404}
                title="you don't know where you are? Neither do we"
            />
        </Layout>
    );
};

export default Error404Page;
