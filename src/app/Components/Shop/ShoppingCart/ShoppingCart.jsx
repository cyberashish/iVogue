"use client";
 
import RecentProducts from "../../Products/RecentProducts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";

const ShoppingCart = () => {
  return (
    <>
    <div>
      <div className="container mb-52">
        <div className="row">
          <CartItems/>
          <OrderSummary/>
        </div>
      </div>
    <RecentProducts/>
    </div>
    </>
  );
};

export default ShoppingCart;
