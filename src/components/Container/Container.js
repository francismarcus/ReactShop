import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Products from "data";
import List from "components/List/List";
import Cart from "components/Cart/Cart";
import Header from "components/Header/Header";
import { Wrap } from "components/Container/Styles";

export default function Container() {
  const [products, setProducts] = useState([]);

  async function fetch() {
    setProducts(Products);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <BrowserRouter>
      <Wrap>
        <Header />
        <Switch>
          <Route
            exact="exact"
            path="/"
            render={() => <List products={products} />}
          />
          <Route path="/Cart" render={() => <Cart />} />
        </Switch>
      </Wrap>
    </BrowserRouter>
  );
}

//
