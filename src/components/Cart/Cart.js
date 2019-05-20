import React, { useContext } from "react";
import RenderCart from 'components/Cart/RenderCart'
import { Store } from 'store';

export default function Cart() {
    const { state } = useContext(Store);
    const Price = state.map(product => {
        return product.price;
        });

        const Total = Price.reduce((previous, product) => {
        return (product += previous);
        }, 0);
  return (
    <>
      <RenderCart />

 
          <div class="ui cards">
            <div class="card">
              <div class="middle aligned content">
                <div class="header">Subtotal is {"$" + Total}</div>{" "}
                <button
                  class="small ui right floated button"
                  onClick={() => alert("Give me a call :)")}
                >
                  Checkout
                  <i class="right chevron icon" />
                </button>{" "}
                <div class="meta"> Procceed </div>
              </div>{" "}
            </div>{" "}
          </div>
    </>
  );
}
