import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import LayoutStyles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
             <div className={LayoutStyles.content}>
                <Header />
                    {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;