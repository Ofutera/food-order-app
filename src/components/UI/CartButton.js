import React from "react";

import classes from "./CartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.name}</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default CartButton;
