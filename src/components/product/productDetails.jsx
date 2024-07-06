import "./productdetails.css";
import { products } from "./products";

const ProductDetails = () => {
  return (

    <div>
      <div className="x-btn" >
        <button className="x-button" >
          X
        </button>

      </div>


      <div className="product-details" >

        <div className="product-image" >
          <img src={products[1].image} alt="" />
        </div>

        <section className="more-abt-product" >
          <h2>
            {products[1].name}
          </h2>
          <p>
          {products[1].price}
          </p>

          <article>

            {
              products[1].description
        }

          </article>

          <div className="action-btn">
            <button className="atc-btn" >
            Add to Cart
            </button>
            <button className="checkout-btn" >
              <span>
                Checkout
              </span>
              <img src="" alt="" />
            </button>
          </div>
        </section>

      </div>



    </div>



  )
};


export default ProductDetails;