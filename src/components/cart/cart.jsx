import { products } from "../../components/product/products";
import "./cart.css";
import { useState } from "react";
import caretright from "../../assets/images/caret-right.png";

const Cart = () => {


  const [quantity, setQuantity] = useState(1);

  function handleClick(action) {

    if (action === 1) {
      setQuantity(quantity + 1)
    }
    else {
      setQuantity(quantity - 1)
    }

  }

  

    return (

    
      < div className="cart-modal active " >

        <h2>
          Cart
        </h2>

        <div className="cart-image" >
          <img src={products[7].image} alt="product image" />
        </div>

        <h3>
          {
            products[7].name
          }
        </h3>

        <p className="price" >
          {
            products[7].price
          }
        </p>

        <p className="qty" >
          Qauntity: <span>
            {quantity}
          </span>
        </p>
        {/* <button onClick={() => { handleClick(1) }} >+</button>
      <button onClick={() => { handleClick(0) }} >-</button> */}

        <button className="checkout-btn" onClick={handleClick}  >
          <span>
            Checkout
          </span>
          <img src={caretright} alt="checkout button" />
        </button>



        <div className="x" >
          <button className="x-btn" >
            x
          </button>
        </div>


      
      </div>


    )
  


};

export default Cart;
