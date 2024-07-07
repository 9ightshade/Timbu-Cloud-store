import { products } from "../product/products"

const Order = () => {
  
  return (
  

    <div>
      <h2>
        Your Order
      </h2>
      <p>
        {products[2].name} x1 <span>
          {products[2].price}
        </span>
      </p>

      <p>
        Tax <span>
          0.99
        </span>
      </p>

      <p>
        Total <span>
          $3900.99
        </span>
      </p>

      
      <h3>
        Payment Method
      </h3>
      <form action="#" method="post">
        <input type="radio" name="payment" id="banktransfer" />
        <label htmlFor="bank-transfer">
          Bank Transfer
        </label>

        
        <input type="radio" name="payment" id="bankcard" />
        <label htmlFor="bank-card">
          Bank card
        </label>

        
        <input type="radio" name="payment" id="cash-on-delivery" />
        <label htmlFor="bank-transfer">
          Cash On Delivery
        </label>

        <div>
          <input type="checkbox" name="T&C" id="T&C" />
          <p>
            I have read and agreed to <span>TIMBU'S</span>
            <a href="#">
              Terms and Conditions
            </a>
            and <a href="#">
              Privacy Policy
            </a>
          </p>
        </div>

        <button type="submit">
          Complete Order
        </button>

      </form>

      


    </div>

  )



};

export default Order;