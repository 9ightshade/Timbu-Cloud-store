import search from "../../../assets/images/search.png";
import profile from "../../../assets/images/user.png";
import fav from "../../../assets/images/nav-fav.png";
import cart from "../../../assets/images/Cart.png";
import "./navicons.css";


const NavIcons = ()=>{

  return(
    <div className="navicons " >
      <div>
       <img src={search} alt="search icon" />
      </div>
      <div>
        <img src={profile} alt="profile icon" />
      </div>
      <div>
        <img src={fav} alt="fav icon" />
      </div>
      <div>
        <img src={cart} alt="cart icon" />
      </div>
    </div>
  )
}

export default NavIcons;