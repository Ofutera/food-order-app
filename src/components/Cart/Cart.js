import React, { Fragment } from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <Fragment>
      <div className={classes["cart-items"]}>
        <span>Sushi</span>
      </div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>12.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Fragment>
  );
};

export default Cart;
