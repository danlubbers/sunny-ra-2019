import React from 'react';
import Layout from '../Components/Layout/Layout';
import Head from '../Components/Head/Head';

import AboutStyles from '../styles/about.module.scss';

const About = () => {

    let email = 'sunnyra23@gmail.com';

    return(
        <Layout>
            <Head title="About" />
            <div>
                <div className={AboutStyles.aboutContainerMobile}>
                    <div className={AboutStyles.photoContactContainerMobile}>
                        <img className={AboutStyles.sunnyPortraitMobile} src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/sunny-red-dress.jpg" alt='Sunny Ra'/>
                            <span className={AboutStyles.emailContainerMobile}> <h3>Email:</h3> <a className={AboutStyles.email} href={`mailto:${email}`}>sunnyra23@gmail.com</a></span>
                    </div>
                    <div className={AboutStyles.educationContainerMobile}>
                        <h3 className={AboutStyles.artistEducatorMobile}>ARTIST / EDUCATOR</h3>
                        <br/>
                        <h3>Education:</h3>
                            <ul>
                                <li>Hunter College, CUNY; Master of Fine Arts</li>
                                <li>University of Pennsylvania; Bachelor of Fine Arts, Cum Laude</li>
                                <li>Pennsylvania Academy of the Fine Arts; Painting Certificate</li>
                                <li>Penn Study Abroad; London, England</li>
                            </ul>
                        <br/>
                        <h3>Other Art Related Experience:</h3>
                            <ul>
                                <li>Vermont Studio Center Residency</li>
                                <li>Kentucky's Governor's School for the Arts</li>
                            </ul>
                        <br/>
                        <h3>Artist Bio:</h3>
                        <h4>Sunny Ra most recently received a Professional Development Grant from the Great Meadows Foundation to attend the annual College Art Association Conference in New York City, the largest international conference in Visual Arts. Ra has been in many exhibitions, including Environmental Perspectives at the Pennsylvania Academy of the Fine Arts in Philadelphia. Now on Paper at the Alliance of Young Artists and Writers in New York City and had her first solo show, Nightscapes at PUBLIC Gallery in Louisville, KY in 2014. In 2012, Ra completed a three-week residency at the Vermont Studio Center under a full fellowship. Ra holds an MFA from Hunter College, CUNY in New York City and a BFA from the University of Pennsylvania and a Painting Certificate from the Pennsylvania Academy of the Fine Arts of Pennsylvania.</h4>
                        <br/>
                        <h3>Artist Statment:</h3>
                        <h4>The foundation of my work originates from my experience of growing up Korean in Louisville, Kentucky. Since I spoke little Korean and could not read or write Hangul, I was an outsider in the Korean Community. Similarly, I never quite identified myself as American since I was not white, and was living among majority white Americans. I remember people would ask me where I was from or comment on how well I spoke English. I grew up feeling and eventually believing that I did not belong anywhere, perhaps nowhere. I am ethnically Korean, but culturally, I am a combination of both Korean and American customs, which I am constantly negotiating and struggling with. It is from this middle ground that my night landscapes emerge and my journey into navigating the obscure begins. By layering images of the American landscape with memories, I attempt to find a space where tensions no longer exist.</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;