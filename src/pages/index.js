import React from "react";
import Layout from '../Components/Layout/Layout';
import Home from '../Components/Home/Home';
import Head from '../Components/Head/Head';

const IndexPage = () => {
    return (
        <div className='booger'>
            <Layout>
                <Head title="Home"/>
                <Home />
            </Layout>
        </div>
    )
}

export default IndexPage;