import React,{Component} from 'react';
import Aux from '../../HOC/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Button from '../../UI/Button/Button'

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
        totalPrice:4,
        purchasing:false
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
    
    checkoutHandler=()=>{
       return(this.setState({
            purchasing:true
        }));
    }
    
    purchaseCancelHandler=()=>{
        return(this.setState({
            purchasing:false
        }));
    }

    purchaseContinueHandler=()=>{

    }

    render(){
        
        return(
            <Aux>
               <Modal show={this.state.purchasing} backdropClicked={this.purchaseCancelHandler}>
                    <OrderSummary ingridients={this.state.ingridients}
                                    totalPrice={this.state.totalPrice.toFixed(2)}/>
                    <p>Continue to checkout?</p>
                    <Button 
                        btnType="Success"
                        clicked={this.purchaseContinueHandler}
                    >
                        Checkout
                    </Button>
                    <Button
                        btnType="Danger"
                        clicked={this.purchaseCancelHandler}
                    >
                        Cancel
                    </Button>
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    totalPrice={this.state.totalPrice}
                    ingridientsAdded={this.addIngridientHandler}
                    ingridientsRemoved={this.removeIngridientHandler}
                    ingridients={this.state.ingridients}
                    checkout={this.checkoutHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;