import React, { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartModal from "../src/components/UI/CartModal"

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
        <CartModal />
      </main>
    </Fragment>
  );
}

export default App;
