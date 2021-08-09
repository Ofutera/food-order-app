import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "../src/components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const dismissCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onDismissCart={dismissCartHandler} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
