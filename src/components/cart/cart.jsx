import { products } from "../../components/product/products";
import "../product/productdetails.css";


const Cart = () => {

  return (

    <div style={{ maxWidth: "500px", }} >

      <h1>
        Cart
      </h1>

      <div>
        <img src={products[2].image} alt="" />
      </div>

      <h2>
        {products[2].name}
      </h2>

      <p style={{ color: "grey" }} >
        {
          products[2].price
        }
      </p>

      <p style={{ color: "grey", margin: "1em 0" }} >
        Quantity <span style={{ border: "1px solid grey", borderRadius: "5px", padding: ".3em .8em", margin: "0 0 0 .3em" }} >
          1
        </span>
      </p>

      <button className="checkout-btn" >
        Checkout
      </button>


      <div className="x-btn" >
        <button className="x-button" >
          x
        </button>
      </div>
    </div>




  )



};

export default Cart;