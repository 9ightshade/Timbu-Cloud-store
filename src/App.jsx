import Cart from "./components/cart/cart"
import Checkout from "./components/checkout/checkout"
import ProductDetails from "./components/product/productDetails"
import DesktopProductList from "./components/product/productList"
import Hero from "./components/shared/hero/hero"
import NavBar from "./components/shared/navbar/navbar"


function App() {


  return (
    <div style={{ padding: ".7em 3em" }} >
      <Checkout/>
     <Cart/>
      <ProductDetails />
      <NavBar />
      <Hero />
      <DesktopProductList/>
    </div>
  )
}

export default App
