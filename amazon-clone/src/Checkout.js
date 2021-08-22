import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
       <div className="checkout__left">
        <h2 className="checkout__title">Your Shopping Basket</h2>

        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        

       </div>
       <div className="checkout__right">
            <h2>The Subtotal will go here</h2>
            <Subtotal />
       </div>
    </div>
  );
}

export default Checkout;
