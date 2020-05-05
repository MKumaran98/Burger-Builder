import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.css';

const logo=(props)=>{
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger town"/>
        </div>
    );
};

export default logo;