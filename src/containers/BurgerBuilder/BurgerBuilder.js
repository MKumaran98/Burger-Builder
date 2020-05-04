import React,{Component} from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGRIDIENT_PRICES={
    meat:1.5,
    salad:0.5,
    bacon:1,
    cheese:0.2
}

class BurgerBuilder extends Component{
    state={
        ingridients:{
            meat:0,
            salad:0,
            bacon:0,
            cheese:0
        },
        totalPrice:4
    }

    addIngridientHandler=(ingridient)=>{
        const oldIngridientcount=this.state.ingridients[ingridient];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+INGRIDIENT_PRICES[ingridient];
        const updatedIngridientCount=oldIngridientcount+1;
        let updated={
            ...this.state.ingridients
        };
        updated[ingridient]=updatedIngridientCount;
        this.setState({
            ingridients:updated,
            totalPrice:newPrice
        });
    }

    removeIngridientHandler=(ingridient)=>{
        const oldIngridientcount=this.state.ingridients[ingridient];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-INGRIDIENT_PRICES[ingridient];
        const updatedIngridientCount=oldIngridientcount-1;
        let updated={
            ...this.state.ingridients
        };
        if(updatedIngridientCount>=0){
            updated[ingridient]=updatedIngridientCount;
            this.setState({
                ingridients:updated,
                totalPrice:newPrice
            });
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    ingridientsAdded={this.addIngridientHandler}
                    ingridientsRemoved={this.removeIngridientHandler}
                    ingridients={this.state.ingridients}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;