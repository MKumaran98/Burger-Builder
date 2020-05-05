import React from 'react';
import classes from './IngridientSelector.css';

const IngridientSelector=(props)=>{
    
    return(
        <div className={classes.selector}>
            <p>{props.label}</p>
            <div>
                <button className={classes.less} onClick={props.removed} disabled={!props.enabled}>Less</button>
                <button className={classes.more} onClick={props.added}>More</button>
            </div>
        </div>
    );
}

export default IngridientSelector;