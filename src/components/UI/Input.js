import React from "react";
import classes from "../UI/Input.module.css";


const Input = (props) => {

  return (
    <div className={classes.input}>
      <label htmlFor="numberOfItems">{props.label}</label>
      <input {...props.input}/>
    </div>
  );
};

export default Input;
