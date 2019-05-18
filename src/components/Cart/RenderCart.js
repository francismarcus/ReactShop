import React, { useEffect, useReducer, useContext } from "react";
import { Store} from "store";

export default function RenderCart() {
    const { state, dispatch } = useContext(Store);

  const removeProduct = product => {
    dispatch({ type: "REMOVE", payload: product });
  };

    const CartItems = state.map(product => (
        <div class="ui divided items">
          <div class="item">
            <div class="ui tiny image">
              <img src={`products/${product.sku}.jpg`} />
            </div>
            <div class="content">
              <a class="header">{product.title}</a>
              <div class="meta">
                <span>{product.description}</span>
              </div>
              <div class="description">
                <p />
              </div>
              <div class="extra">{"$" + product.price}</div>
              <button
                class="tiny ui right floated button"
                onClick={() => removeProduct(product)}
              >
                <i class="close icon" />
              </button>
            </div>
          </div>
        </div>
      ));

    return (
        <>
        {CartItems}
        </>
    )
}
