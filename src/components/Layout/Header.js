import React, { Fragment } from "react";

import classes from "./Header.module.css"
import CartButton from "../UI/CartButton"
import mealsImg from "../../assets/food-table.jpg";



const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>FoodApp</h1>
          <CartButton name="Your Cart"/>
      </header>
      <div className={classes['main-image']}>
          <img src= {mealsImg} alt="A table with food."/>
      </div>
    </Fragment>
  );
};

export default Header;