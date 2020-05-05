import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Auxiliary';

const sideDrawer=(props)=>{
    let sideDrawerclass=[classes.SideDrawer];
    if(props.open){
        sideDrawerclass.push(classes.Open)
    }else{
        sideDrawerclass.push(classes.Close)
    }
    return(
        <Aux>
            <Backdrop backdropClicked={props.closed} show={props.open}/>
            <div className={sideDrawerclass.join(' ')}>
                <div style={{height:"10%", marginBottom:"32px"}}>
                <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );

}

export default sideDrawer;