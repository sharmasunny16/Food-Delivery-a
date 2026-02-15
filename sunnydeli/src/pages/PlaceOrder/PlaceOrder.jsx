import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../components/Context/StoreContext';

const PlaceOrder = () => {
   const{getTotalCartAmount} = useContext(StoreContext);
  return (
   <form className='place-order'>
    <div className="place-order-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
  <input type="text" placeholder='First-name' />
  <input type="text" placeholder='Last-name' />
</div>
 <input type="text" placeholder='email-address' />
  <input type="text" placeholder='street' />
  <div className="multi-fields">
  <input type="text" placeholder='city' />
  <input type="text" placeholder='state' />
</div>
<div className="multi-fields">
  <input type="text" placeholder='zip-code' />
  <input type="text" placeholder='country' />
</div>
 <input type="text" placeholder='phone' />

    </div>
    <div className="place-order-right">
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
      <button>PROCEED TO PAYMENT</button>
       </div>


    

   </form>
  )
}

export default PlaceOrder
