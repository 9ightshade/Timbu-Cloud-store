import sliders from "../../assets/images/Sliders.png"
import caretDown from "../../assets/images/CaretDown.png";


const products = {

  name: "Mahogany Wooden Chair",
  description: "Embrace the timeless beauty of our Old world Chair Collection. Each piece is meticulously crafted from recliamed wood, , imbued with the rich patina and unique imperfections that tell a story. Discover rustic charm and enduring character that will grace your home for generations to come.",
  price: "$1750",
  // image:"../../assets/images/Mahogany-wooden-chair.png"
image:"../../../public/vite.svg"





};

























const ProductList = () => {

return(

<div  >

    <div style={{display:"flex", justifyContent:"space-between"}} >
      <div style={{display:"flex", alignItems:"center", gap:".6em",border:"2px grey solid", borderRadius:"4px", padding:".3em .6em"}} >
        <img src={sliders} alt="product filter" /> 
        <p>
          Filter
        </p>
      </div>


       <div style={{display:"flex", alignItems:"center",  gap:".5em", border:"2px grey solid", borderRadius:"4px", padding:".3em .6em"}} >
        <p>
          Sort: Latest Products
        </p>
        
        <img src={caretDown} alt="product filter" /> 
        
      </div>


      <div>
        {/* <img src= alt="" /> */}

        <img src={products.image} alt="" />
    </div>



</div>

  
</div>

)

};


export default ProductList;