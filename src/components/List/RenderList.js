import React, { useContext } from "react";
import { Store } from "store";
import { Featured, Item, Picture } from "components/List/Styles";

export default function RenderList(props) {
  const { state, dispatch } = useContext(Store);

  const ProductItems = props.products.map(product => (
    <Picture>
      <div class="ui card">
        <img
          class="ui centered image"
          src={`products/${product.sku}.jpg`}
          alt={product.title}
        />
        <div class="content">
          <a class="header">{product.title}</a>
          <div class="description">{product.description}</div>
        </div>
        <div class="extra content">
          <a>{"$" + product.price}</a>
          <button
            class="ui basic right floated button"
            onClick={() => props.addProduct(product)}
          >
            <i class="shopping cart icon" />
            Add to cart
          </button>
        </div>
      </div>
    </Picture>
  ));

  return (
    <>
      <Featured> {ProductItems} </Featured>
    </>
  );
}
