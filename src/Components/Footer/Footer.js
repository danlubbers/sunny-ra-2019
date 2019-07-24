import React from 'react';

import FooterStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
             <div className={FooterStyles.footerContent}>
                <h1>ALL IMAGES COPYRIGHT @ SUNNY RA | SITE BY <a className={FooterStyles.danlubbers} href="http://danlubbers.com">DAN LUBBERS </a></h1>
                </div>
        </footer>
    )
}

export default Footer;