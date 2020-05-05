import React,{Component} from 'react';
import Aux from '../../HOC/Auxiliary';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { render } from 'react-dom';

class Layout extends Component{
    state={
        showSideDrawer:false
    }
    
    hideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }

    showDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:true});
    }

    render()
    {
        return(
            <Aux>
                <Toolbar open={this.showDrawerClosedHandler}/>
                <SideDrawer closed={this.hideDrawerClosedHandler} open={this.state.showSideDrawer} />
                <main className={classes["content-window"]}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}
export default Layout;