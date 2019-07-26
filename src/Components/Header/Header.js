import React, { Component } from 'react';
import { Link } from 'gatsby';
import Toggle from '../Toggle/Toggle';
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
        this.handleClickMobile = this.handleClickMobile.bind(this);
        this.handleClickMobilePainting = this.handleClickMobilePainting.bind(this);
        this.handleOverPainting = this.handleOverPainting.bind(this);
        this.handleOverWorks = this.handleOverWorks.bind(this);
        this.handleOverGallery = this.handleOverGallery.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickAbout = this.handleClickAbout.bind(this);
        this.handleClickExhibitions = this.handleClickExhibitions.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    handleClickMobile() {
        this.setState({showMobile: !this.state.showMobile})
    }

    handleClickMobilePainting() {
        this.setState({showMobilePainting: !this.state.showMobilePainting})
    }

    handleOverPainting() {
        this.setState({
            showPainting: !this.state.showPainting,
            showWorks: false,
            showGallery: false
        })
    }

    handleOverWorks() {
        this.setState({
            showWorks: !this.state.showWorks,
            showPainting: false,
            showGallery: false
        })
    }

    handleOverGallery() {
        this.setState({
            showGallery: !this.state.showGallery,
            showPainting: false,
            showWorks: false
        })
    }


    handleClickHome() {
        this.setState({
            showAbout: false,
            howPainting: false, 
            showWorks: false,
            showGallery: false,
            showMobile: false
        })
        this.handleLeave()
    }

    handleClickAbout() {
        this.setState({
            showAbout: !this.state.showAbout,
            showPainting: false,
            showWorks: false,
            showGallery: false,
            showExhibitions: false
        })
    }

    handleClickExhibitions() {
        this.setState({
            showExhibitions: !this.state.showExhibitions,
            showPainting: false,
            showWorks: false,
            showGallery: false,
            showAbout: false,
        })
    }

    handleLeave() {
        this.setState({
            showPainting: false, 
            showWorks: false,
            showGallery: false,
            showAbout: false,
            showExhibitions: false
        })
    }

    render() {
        // let email = 'sunnyra23@gmail.com'
        let {showAbout, showPainting, showWorks, showGallery, showExhibitions, showMobile} = this.state;
        let mobileDropDown = showMobile ? `${HeaderStyles.slideMobile} ${HeaderStyles.slideMobilePosition}` : `${HeaderStyles.slideMobile}`;
        // let exhibitionsDropdown = showExhibitions ?  'slide-exhibitions slide-exhibitions-position' : 'slide-exhibitions';
        // let aboutDropDown = showAbout ? 'slide-about slide-about-position' : 'slide-about';
        // let paintingDropDown = showPainting ? 'slide-painting slide-painting-position' : 'slide-painting';
        // let worksDropDown = showWorks ? 'slide-works slide-works-position' : 'slide-works';
        // let galleryDropDown = showGallery ? 'slide-gallery slide-gallery-position' : 'slide-gallery';

        return (
            <header className={HeaderStyles.header}>
                <div className={HeaderStyles.logoContainer}>
                    <Link to='/' onClick={this.handleClickHome}><img className={HeaderStyles.logo} src={Logo} alt='Sunny Ra Logo'/></Link>
                </div>
                <div className={HeaderStyles.FaBars}>    
                    <button className={HeaderStyles.bars} onClick={this.handleClickMobile}><FaBars /></button>
                    <div className={mobileDropDown}>
                    <ul className={HeaderStyles.mobileContentContainer}>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <li className={HeaderStyles.mobileTextContent} onClick={toggle} >Paintings</li>
                                            {on && 
                                            <ul className={mobileDropDown}>
                                                <Link to='/paintings2006'><li onClick={this.handleClickMobile}>2006</li></Link>
                                                <Link to='/paintings2008'><li onClick={this.handleClickMobile}>2008</li></Link>
                                                <Link to='/paintings2010'><li onClick={this.handleClickMobile}>2010</li></Link>
                                                <Link to='/paintings2012'><li onClick={this.handleClickMobile}>2012</li></Link>
                                                <Link to='/paintings2014'><li onClick={this.handleClickMobile}>2014</li></Link>
                                                <Link to='/paintings2015'><li onClick={this.handleClickMobile}>2015</li></Link>
                                            </ul>
                                            }
                                    </div>
                                )}
                            </Toggle>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <li className={HeaderStyles.mobileTextContent} onClick={toggle}>WORKS ON PAPER</li>
                                        {on && 
                                            <ul className={mobileDropDown}>
                                                <Link to='/works2006'><li onClick={this.handleClickMobile}>2006</li></Link>
                                                <Link to='/works2009'><li onClick={this.handleClickMobile}>2009</li></Link>
                                                <Link to='/works2012'><li onClick={this.handleClickMobile}>2012</li></Link>
                                                <Link to='/works2016'><li onClick={this.handleClickMobile}>2016</li></Link>
                                            </ul>
                                        }
                                    </div>
                                )}
                            </Toggle>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Toggle>
                                {({on, toggle})=> (
                                    <div>
                                        <li className={HeaderStyles.mobileTextContent} onClick={toggle}>PHOTO GALLERY</li>
                                        {on && 
                                            <ul className={mobileDropDown}>
                                                <Link to='/installation'><li onClick={this.handleClickMobile}>Installations</li></Link>
                                                <Link to='/studentwork'><li onClick={this.handleClickMobile}>Student Work</li></Link>
                                            </ul>
                                        }
                                    </div>
                                )}
                            </Toggle>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Link to='/commissioned'><button className={HeaderStyles.commissionMobileBtn} onClick={this.handleClickMobile}>Commissioned Work</button></Link>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Link to="/about"><button className={HeaderStyles.aboutMobileBtn} onClick={this.handleClickMobile} >About</button></Link>
                            <div className={HeaderStyles.horizontalLine}></div>
                            <Link to="/exhibition"><button className={HeaderStyles.exhibitionsMobileBtn} onClick={this.handleClickMobile}>Exhibitions</button></Link>
                            <div className={HeaderStyles.horizontalLine}></div>
                        </ul>

                    </div>
                </div>
            </header>
        )
    }
}

export default Header;