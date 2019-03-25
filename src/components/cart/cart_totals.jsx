import React from "react";
import PropTypes from "prop-types";
export default class CartTotals extends React.Component {
  constructor(props) {
    super();
    this.state = {
      total: props.total,
      subTotal: props.subTotal
    };
  }
  componentWillReceiveProps(nextProps) {
    this.state = { total: nextProps.total, subTotal: nextProps.subTotal };
  }
  render() {
    // Render the cart

    return (
      <li className="pure-menu-item totals">
        <span>Sub total: {this.state.subTotal} </span>
        <span>Total (after discount): {this.state.total}</span>
      </li>
    );
  }
}
