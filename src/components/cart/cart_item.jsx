import React from "react";
import PropTypes from "prop-types";
export default class CartItem extends React.Component {
  constructor(props) {
    super();
    this.removItem = props.removeItem;
    this.state = { ...props.cartItem };
    this.productId = props.i;
  }

  render() {
    return (
      <li className="pure-menu-item product">
        <span>{this.state.productName}</span>
        <span>{this.state.price}</span>
        <span>
          <button id={this.productId} onClick={this.removItem}>
            remove
          </button>
        </span>
      </li>
    );
  }
}
