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
            {
                controls.map(control=><IngridientSelector 
                                        key={control.label} 
                                        label={control.label}
                                        added={()=>props.ingridientsAdded(control.type)}
                                        removed={()=>props.ingridientsRemoved(control.type)}
                                        enabled={props.ingridients[control.type]>0?true:false}
                                        />)
            }
        </div>
    );
}

export default BuildControls;