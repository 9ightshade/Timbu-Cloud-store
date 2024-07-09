import CartPage from "./pages/cartPage"
import CheckoutPage from "./pages/checkout"
import Product from "./pages/product"
import ProductInfo from "./pages/productInfo"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    
      <div style={{padding:"0 .9em"}} >

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/productDetails" element={<ProductInfo />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
      
      </div>
  
  )
}

export default App
