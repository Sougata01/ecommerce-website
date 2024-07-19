import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import { useOutletContext } from "react-router-dom";

function StorePage() {

  const outletCtx = useOutletContext()
  
  return (
    <>
      <Cart show={outletCtx.show} onClose={outletCtx.onClose} />
      <Products productsArr={outletCtx.productsArr} onShow={outletCtx.onShow} />
    </>
  )
}

export default StorePage