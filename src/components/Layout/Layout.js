import React from 'react';
import Aux from '../../HOC/Auxiliary';
import classes from './layout.css';


const Layout=(props)=>{
    return(
        <Aux>
            <div>Toolbar,sidedrawer,Backdrop</div>
            <main className={classes["content-window"]}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;