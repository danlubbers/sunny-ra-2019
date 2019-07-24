import React, { Component } from 'react';
import { Link } from 'gatsby';
import Logo from '../../assets/sunny-ra-logo.png';
import { FaBars } from 'react-icons/fa';

import HeaderStyles from './Header.module.scss';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showMobile: false,
            showPainting: false,
            showWorks: false,
            showGallery: false,
            showHome: false,
            showAbout: false,
            showExhibitions: false
        }
    }

    render() {
        return (
            <header className={HeaderStyles.header}>
                <div className={HeaderStyles.logoContainer}>
                    <Link to='/'><img className={HeaderStyles.logo} src={Logo} alt='Sunny Ra Logo'/></Link>
                </div>
                <div>    
                    <button className={HeaderStyles.bars}><FaBars /></button>
                </div>
            </header>
        )
    }
}

export default Header;