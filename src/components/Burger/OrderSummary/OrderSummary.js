import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import classes from './OrderSummary.css';

const OrderSummary=(props)=>{
    let ingridients=null;    
    ingridients=Object.keys(props.ingridients)
                .map((ingridient,i)=>{
                    return (<li key={ingridient+i}> <span>{ingridient}</span> : {props.ingridients[ingridient]}</li>)
                });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>
                {ingridients}
            </ul>
            <p>The total price is <strong>{props.totalPrice} $</strong></p>
        </Aux>
    );
}

export default OrderSummary;