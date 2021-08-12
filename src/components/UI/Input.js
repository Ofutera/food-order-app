import React from "react";
import classes from "../UI/Input.module.css";


const Input = React.forwardRef((props, ref) => {

  return (
    <div className={classes.input}>
      <label htmlFor="numberOfItems">{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  );
});

export default Input;
