import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from './Hamburger/Hamburger'

const toolbar=(props)=>{
    return(
        <header className={classes.Toolbar}>
            <Hamburger open={props.open}/>
            <div style={{ height:"80%"}}>
                <Logo/>
            </div>
            <nav className={ classes.DesktopOnly}>

                    <NavigationItems/>

            </nav>
        </header>
    );
}

export default toolbar;