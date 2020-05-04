import React from 'react';
import classes from './IngridientSelector.css';

const IngridientSelector=(props)=>{
    let lessBtnStyle=[classes.disable];
    if(props.enabled){
        lessBtnStyle.push(classes.less);
    }
    
    return(
        <div className={classes.selector}>
            <p>{props.label}</p>
            <button className={lessBtnStyle.join(' ')} onClick={props.removed}>Less</button>
            <button className={classes.more} onClick={props.added}>More</button>
        </div>
    );
}

export default IngridientSelector;