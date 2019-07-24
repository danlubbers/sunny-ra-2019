import React from 'react';
import HomeStyles from '../Home/Home.module.scss';

import blacksand from '../../assets/images/home/black-sand.jpg';
import mammoth from '../../assets/images/home/mammoth.jpg';
import flight from '../../assets/images/home/flight.jpg';
import manta from '../../assets/images/home/manta.jpg';
import kinetic from '../../assets/images/home/kinetic.jpg';
import might from '../../assets/images/home/might.jpg';
import radiate from '../../assets/images/home/mammoth.jpg';
import nebula from '../../assets/images/home/nebula.jpg';
import chase from '../../assets/images/home/chase.jpg';
import harvest from '../../assets/images/home/harvest.jpg';
import expedition from '../../assets/images/home/expedition.jpg';

const Home = () => {
    return (
        <div className={HomeStyles.homeContainer}>
            <img className={HomeStyles.mobileImages} src={blacksand} alt='blacksand'/>
            <img className={HomeStyles.mobileImages} src={mammoth} alt='mammoth'/>
            <img className={HomeStyles.mobileImages} src={flight} alt='flight'/>
            <img className={HomeStyles.mobileImages} src={manta} alt='manta'/>
            <img className={HomeStyles.mobileImages} src={kinetic} alt='kinetic'/>
            <img className={HomeStyles.mobileImages} src={might} alt='might'/>
            <img className={HomeStyles.mobileImages} src={radiate} alt='radiate'/>
            <img className={HomeStyles.mobileImages} src={nebula} alt='nebula'/>
            <img className={HomeStyles.mobileImages} src={chase} alt='chase'/>
            <img className={HomeStyles.mobileImages} src={harvest} alt='harvest'/>
            <img className={HomeStyles.mobileImages} src={expedition} alt='expedition'/>
        </div>
    )
}

export default Home;