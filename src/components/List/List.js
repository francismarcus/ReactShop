import React, { useContext } from "react";
import { Store } from "store";
import RenderList from 'components/List/RenderList';

export default function List(props) {
  const { dispatch } = useContext(Store)

  const addProduct = product => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <>
      <RenderList products={props.products} addProduct={addProduct} />
    </>
  );
}
