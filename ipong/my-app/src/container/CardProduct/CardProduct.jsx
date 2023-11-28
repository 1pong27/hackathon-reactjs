import React, { Component } from 'react';

class CardProduct extends Component {
  state = {
    order: 4,
    name: 'ipong'
  }

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  }

  handlePlus = () => {
    this.setState(
      (prevState) => ({
        order: prevState.order + 1
      }),
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  }

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        (prevState) => ({
          order: prevState.order - 1
        }),
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  }

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://inforadar.disway.id/upload/4d86554b2e465f694dcab4da09c51285.png" alt="" />
        </div>
        <p className="product-title">Product Title</p>
        <p className="product-price">rp 400.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>-</button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>+</button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
