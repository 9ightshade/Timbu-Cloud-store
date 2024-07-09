import CheckoutPage from "./pages/checkout"
import Product from "./pages/product"
import ProductInfo from "./pages/productInfo"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {


  return (
    
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Product />} />
          <Route path="/productDetails" element={<ProductInfo/>}/>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
  
  )
}

export default App
