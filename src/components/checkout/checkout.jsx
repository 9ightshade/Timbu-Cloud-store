import Order from "../order/order";
import NavBar from "../shared/navbar/navbar";

const Checkout = () => {
  
  return (
  
    <div>
      <NavBar/>

      <h1>
        Checkout
      </h1>
      <p>
        Have a coupon ? <a href="#">Click here to enter the code</a>
      </p>
      <form action="#" method="post">
        <h2>
          Shipping Information
        </h2>
        <label htmlFor="firstname">
          First name
          <div>
            <input type="text" name="firstname" id="firstname" />
       </div>
        </label>
       

        <label htmlFor="lastname">
          Last name
          <div>
            <input type="text" name="lastname" id="lastname" />
        </div>
        </label>
        
        <label htmlFor="country/region">
          Country/Region
          
          <div>
            <input type="text" name="country/region" id="country-region" />
          </div>
        </label>

        <label htmlFor="address">
          Address
          <div>
            <input type="text" name="address" id="address" />
</div>
        </label>

        <label htmlFor="city">
          City
          <div>
            <input type="text" name="city" id="city" />
          </div>
        </label>
        

        <label htmlFor="state">
          State
          <div>
            <input type="text" name="state" id="state" />
          </div>
        </label>

        
        <label htmlFor="email">
          Email 
          <div>
            <input type="email" name="email" id="email" />
          </div>
        </label>
        
        <label htmlFor="phone">
          Phone 
          <div>
            <input type="tel" name="phone" id="phone" />
          </div>
        </label>

</form>

      

<Order/>




    </div>


  )




};


export default Checkout;