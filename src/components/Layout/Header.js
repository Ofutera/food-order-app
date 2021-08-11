import React, { Fragment } from "react";

import classes from "./Header.module.css";
import CartButton from "../UI/CartButton";
import mealsImg from "../../assets/food-table.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OrderFood</h1>
        <CartButton name="Your Cart" onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table with food." />
      </div>
    </Fragment>
  );
};

export default Header;
