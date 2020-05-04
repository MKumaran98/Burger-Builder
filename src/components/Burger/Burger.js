import React from 'react';
import classes from './burger.css';
import BurgerIngridients from './BurgeIngridients/BurgerIngridients';

const burger=(props)=>{

    let transformedArray=Object.keys(props.ingridients)
                            .map((igkey)=>{return [...Array(props.ingridients[igkey])].map((_,index)=>{
                                return(
                                    <BurgerIngridients type={igkey} key={igkey+index}/>
                                );
                            });
                        }).flat();
    
    if(transformedArray.length===0){
        transformedArray=(<p>Please start adding ingridients</p>);
    }
    return(
        <div className={classes.burgerContainer}>
            <BurgerIngridients type="bread-top"/>
            {transformedArray}
            <BurgerIngridients type="bread-bottom"/>
        </div>
    );

}

export default burger;