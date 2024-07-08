import sliders from "../../assets/images/Sliders.png"
import caretDown from "../../assets/images/CaretDown.png";
import "./productlist.css";
import { products } from "./products";
// import copyright from "../../assets/images/copyright.png";
// import Logo from "../shared/logo/logo";
import Footer from "../shared/footer/footer";


const ProductList = () => {

  return (

    <div className="desktop-product-container" >

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 0 2.5em 0" }} >
        <div  className="filter-product">
          <img src={sliders} alt="product filter" />
          <p>
            Filter
          </p>
        </div>


        <div style={{ display: "flex", alignItems: "center", gap: ".5em", border: "1px grey solid", borderRadius: "4px", padding: ".5em 1em" }} >
          <p>
            Sort: Latest Products
          </p>

          <img src={caretDown} alt="product filter" />

        </div>


        <div className="mobile-filter" >
          <img src={sliders} alt="product filter" />
</div>



      </div>


      <div className="product-container">

        {

          products.map((product) => {


            return (


              <div className="product-card" key={product.id}>
                <div>
                  <img src={product.image} alt="Product image" style={{ width: "100%" }} />
                </div>
                <h2>
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


     
<Footer/>


    </div>

  )

};


export default ProductList;