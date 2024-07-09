import NavBar from "../shared/navbar/navbar";
import { products } from "../product/products";
import "./checkout.css";
import Footer from "../shared/footer/footer";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
  
    navigate("/");

}


  return (
  
    <div>
      <NavBar/>

      <h1  >
        Checkout
      </h1>

      <a href="#" className="bck-to-shop" onClick={handleClick} >
        Back to shop
      </a>
      <p className="coupon" >
        Have a coupon ? <a href="#">Click here to enter the code</a>
      </p>
      <form action="#" method="post">
        <h2 className="shipping" >
          Shipping Information
        </h2>
        <label htmlFor="firstname">
          First name
        
        </label>
        <div>
          <input type="text" name="firstname" id="firstname" />
        </div>
       

        <label htmlFor="lastname">
          Last name
         
        </label>
        <div>
          <input type="text" name="lastname" id="lastname" />
        </div>
        
        <label htmlFor="country/region">
          Country/Region
          
         
        </label>
        <div>
          <input type="text" name="country/region" id="country-region" />
        </div>


        <label htmlFor="address">
          Address
   
        </label>
        <div>
          <input type="text" name="address" id="address" />
        </div>


        <label htmlFor="city">
          City
         
        </label>
        <div>
          <input type="text" name="city" id="city" />
        </div>

        <label htmlFor="state">
          State
          
        </label>
        <div>
          <input type="text" name="state" id="state" />
        </div>
        
        <label htmlFor="email">
          Email 
         
        </label>
        <div>
          <input type="email" name="email" id="email" />
        </div>


        <label htmlFor="phone">
          Phone 
         
        </label>
        <div>
          <input type="tel" name="phone" id="phone" />
        </div>

</form>

      

      <div className="Order-comp" >
        <h2 className="Order-header">
          Your Order
        </h2>
        <div className="order-desc" >
          <p>
            {products[2].name} x1</p> <p className="order-price" >
            {products[2].price}
          </p>
        </div>

        <p className="order-desc" >
          {products[2].name} x1 <span className="order-price" >
            {products[2].price}
          </span>
        </p>

        <div className="tax" >
          <p>
            Tax
          </p>
          <p>
            0.99
          </p>
        </div>

        <div className="total" >
          <p>
            Total
          </p>
          <p>
            $3900.99
          </p>
        </div>


        <h3>
          Payment Method
        </h3>
        <form action="#" method="post" className="payment-form" >
          <div className="bank-transfer" >
            <input type="radio" name="payment" id="banktransfer" />
            <label htmlFor="bank-transfer">
              Bank Transfer
            </label>
         </div>


          <div className="bankcard" >
            <input type="radio" name="payment" id="bankcard" />
            <label htmlFor="bank-card">
              Bank card
            </label>
          </div>


          <div className="cash-on" >
            <input type="radio" name="payment" id="cash-on-delivery" />
            <label htmlFor="bank-transfer">
              Cash On Delivery
            </label>
      </div >

          <div className="TC-container" >
            <input type="checkbox" name="T&C" id="T&C" />
            <p>
              I have read and agreed to <span>TIMBU&apos;S </span>
              <a href="#">
                Terms and Conditions
               </a> and
               <a href="#">
                Privacy Policy
              </a>
            </p>
          </div>

          <button type="submit">
            Complete Order
          </button>

        </form>




      </div>

<Footer/>


    </div>


  )




};


export default Checkout;