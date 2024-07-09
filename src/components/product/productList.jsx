import sliders from "../../assets/images/Sliders.png"
import caretDown from "../../assets/images/CaretDown.png";
import fav from "../../assets/images/fav.png";
import atc from "../../assets/images/add-to-cart.png";
import "./productlist.css";
import { products } from "./products";
import Footer from "../shared/footer/footer";
import { useNavigate } from "react-router-dom";
import Cart from "../cart/cart";
import { useState } from "react";


const ProductList = () => {

  const [isVisible, setIsVisible] = useState(true);

  const modalTrigger = () => {
    console.log(isVisible);
    setIsVisible(!isVisible)
}



  const navigate = useNavigate();

  const handleClick = (action) => {
    if (action === 1) {
      navigate("/productDetails");
    }
    else {
      navigate("/");
    }
  };


  return (

    <div className="desktop-product-container" >

      
      {
        isVisible?<Cart/>:null
      }
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 2.5em 0" }} >
        <button className="filter-product">
          <img src={sliders} alt="product filter" />
          <p>
            Filter
          </p>
        </button>


        <button className="sorting" >
          <p>
            Sort: Latest Products
          </p>

          <img src={caretDown} alt="product filter" />

        </button>


        <div className="mobile-filter" >
          <img src={sliders} alt="product filter" />
        </div>
        


      </div>


      <div className="product-container">

        {

          products.map((product) => {


            return (


              <div className="product-card" key={product.id}>
                <div className="product-image"  >
                  <img src={product.image} alt="Product image" style={{ width: "100%" }} />

                  <div className="fav-cart"  >
                    <button className="fav" onClick={()=>{modalTrigger()}} >
                      <img src={fav} alt="fav" />
                    </button>

                    <button className="shop-cart"  onClick={()=>{handleClick(1)}} >
                      <img src={atc} alt="cart" />
                    </button>
</div>
                </div>
                <h2 className="product-name" >
                  {
                    product.name
                  }
                </h2>

                <p>
                  {
                    product.price
                  }
                </p>

              </div>

            )


          })

        }


      </div>


      <p className="explore">
        <a href="#">
          Explore more products
        </a>
      </p>



      <Footer />


      
    </div>

  )

};


export default ProductList;