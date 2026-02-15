import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">

      {/* Cart Items Section */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + '/images/'+item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Bottom Section */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>

        
        <div className="cart-total-detalis">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>

        <hr />

        <div className="cart-total-detalis">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount()===0?0:2}</p>
        </div>

        <hr />

        <div className="cart-total-detalis">
          <p>Total</p>
          <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
        </div>
     

      {/* Checkout Button */}
      <button onClick={()=>navigate('./order')}>PROCEED TO CHECKOUT</button>
       </div>

      {/* Promo Code Section */}
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
