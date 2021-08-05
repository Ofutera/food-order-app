import React, { Fragment } from "react";
import classes from "./CartModal.module.css";
import Cart from "../Cart/Cart";

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const Modal = () => {
  return (
    <div className={classes.modal}>
      <Cart />
    </div>
  );
};

const CartModal = () => {
  return (
    <Fragment>
      <Backdrop />
      <Modal />
    </Fragment>
  );
};

export default CartModal;
