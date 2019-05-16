import React, { useState, useEffect } from "react";
import Products from 'data';

export default function Component() {
    const [products, setProducts] = useState([])
    async function fetch() {
        setProducts(Products);
      }
    
      useEffect(() => {
        fetch();
      }, []);

  return (
      <h1> Container </h1>
  )
}

//
