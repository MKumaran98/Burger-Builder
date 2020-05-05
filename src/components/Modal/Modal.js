import React from 'react';
import classes from './Modal.css';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../HOC/Auxiliary';

const modal=(props)=>{
    return(
        <Aux>
            <Backdrop show={props.show} backdropClicked={props.backdropClicked}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show? 'translateY(-20vh)': 'translateY(-100vh)',
                    opacity: props.show? 1:0
                }}>
                {props.children}
            </div>
            <div>
                
            </div>
        </Aux>
    );
}

export default modal;