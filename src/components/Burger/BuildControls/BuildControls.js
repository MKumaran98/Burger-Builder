import React from 'react';
import classes from './BuildControls.css';
import IngridientSelector from './IngridientSelector/IngridientSelector';

const controls=[
    {label:"Meat" , type:"meat"},
    {label:"Salad" , type:"salad"},
    {label:"Bacon" , type:"bacon"},
    {label:"Cheese" , type:"cheese"}
]


const BuildControls=(props)=>{
    return(
        
        <div className={classes.controlContainer}>
            <p>Current price: <strong>{props.totalPrice.toFixed(2)} $</strong></p>
            {
                controls.map(control=><IngridientSelector 
                                        key={control.label} 
                                        label={control.label}
                                        added={()=>props.ingridientsAdded(control.type)}
                                        removed={()=>props.ingridientsRemoved(control.type)}
                                        enabled={props.ingridients[control.type]>0?true:false}
                                        />)
            }
            <button className={classes.checkoutBtn} disabled={props.totalPrice>4?false:true} onClick={props.checkout}>Order Now!!</button>
        </div>
    );
}

export default BuildControls;