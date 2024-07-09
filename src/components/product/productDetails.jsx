import "./productdetails.css";
import { products } from "./products";
import caretright from "../../assets/images/caret-right.png";
// import x from "../../assets/images/X.png";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleClick = () => {
  
    navigate("/checkout");


}


  return (

    <div className="product-container" >
      {/* <div className="cancel-btn" >
        <img src={x} alt="cancel button" />
      </div>  */}

      <div className="product-details" >


        <div className="product-image" >
          <img src={products[3].image} alt="" />
        </div>

        <section>
          <h1>
            {products[3].name}
          </h1>
          <p className="product-price" >
            {products[3].price}
          </p>

          <article>
            {
              products[3].description
            }
          </article>

          
          <div className="action-btn" >
            <button className="atc-btn" onClick={handleClick}  >
            Add to Cart
            </button>
            <button className="checkout-btn" onClick={handleClick}  >
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





// <div className="product-details-container" >
//   <div className="x-btn" >
//     <img src={x} alt="cancel button" />
//   </div>




//   <div className="product-details" >

//     <div className="product-image" >
//       <img src={products[1].image} alt="" />
//     </div>

//     <section className="more-abt-product" >
//       <h2>
//         {products[1].name}
//       </h2>
//       <p>
//         {products[1].price}
//       </p>

//       <article>

//         {
//           products[1].description
//         }

//       </article>

//       <div className="action-btn">
//         <button className="atc-btn" >
//           Add to Cart
//         </button>
//         <button className="checkout-btn" >
//           <span>
//             Checkout
//           </span>
//           <img src={caretright} alt="checkout" />
//         </button>
//       </div>
//     </section>

//   </div>



// </div>