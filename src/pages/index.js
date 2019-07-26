import React from "react";
import Layout from '../Components/Layout/Layout';
import Home from '../Components/Home/Home';
import Head from '../Components/Head/Head';

const IndexPage = () => {
    return (
        <>
            <Layout>
                <Head title="Sunny Ra"/>
                <Home />
            </Layout>
        </>
    )
}

export default IndexPage;