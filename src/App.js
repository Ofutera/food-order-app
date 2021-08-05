import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "../src/components/Cart/Cart"

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
