import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 4,
        name: 'ipong'
    }
    handleCouterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render(){
        return(
        <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/nasigoreng.jpg" alt=""/>
                </div>
            <div className="troley">
                <img src="https://ik.imagekit.io/tvlk/blog/2020/01/81210432_149773476468136_7014969158513952882_n.jpg?tr=dpr-2,w-675" alt="" />
            <div className="count">{this.state.order}</div>
            </div>
            </div>
            <CardProduct onCounterChange={(value)=> this.handleCouterChange(value)}/>
    </Fragment>
        );
    }
}

export default Product;