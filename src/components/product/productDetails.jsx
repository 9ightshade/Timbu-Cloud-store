import "./productdetails.css";
import { products } from "./products";
import caretright from "../../assets/images/caret-right.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const ProductDetails = () => {

  const [productId, setProductId] = useState(1);



  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 14) + 1;

    setProductId(randomNumber);

},[])

  
  const navigate = useNavigate();
  const handleClick = (value) => {
    if (value === 1) {
      navigate("/checkout");
    }
    else if (value === 2) {
      navigate("/cart")
    }
};


  return (

    <div className="product-container" >

      <div className="product-details" >


        <div className="product-image" >
          <img src={products[productId].image} alt="" />
        </div>

        <section>
          <h2>
            {products[productId].name}
          </h2>
          <p className="product-price" >
            {products[productId].price}
          </p>

          <article>
            {
              products[productId].description
            }
          </article>


          <div className="action-btn" >
            <button className="atc-btn" onClick={()=>{handleClick(2)}}  >
              Add to Cart
            </button>

            <button className="checkout-btn" onClick={()=>{handleClick(1)}}  >
              <span>
                Checkout
              </span>
              <img src={caretright} alt="checkout button" />
            </button>
          </div>


        </section>



      </div>




    </div>



  )
};


export default ProductDetails;

