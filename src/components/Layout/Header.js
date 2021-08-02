import React, { Fragment } from "react";

import mealsImg from "../../assets/food-table.jpg";
import classes from "./Header.module.css"

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
          <h1>FoodApp</h1>
          <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
          <img src= {mealsImg} alt="A table with food."/>
      </div>
    </Fragment>
  );
};

export default Header;