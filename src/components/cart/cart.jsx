import { products } from "../../components/product/products";
import "./cart.css";
import { useState } from "react";
import caretright from "../../assets/images/caret-right.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  function handleClick(action) {

    if (action === 1) {
      navigate("/")
      // setQuantity(quantity + 1)
    }
    else {
navigate("/productDetails")
      // setQuantity(quantity - 1)
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
          <button className="x-btn" onClick={()=>{handleClick(1)}}  >
            x
          </button>
        </div>


      
      </div>


    )
  


};

export default Cart;
