import search from "../../../assets/images/search.png";

import profile from "../../../assets/images/user.png";
import fav from "../../../assets/images/nav-fav.png";
import cart from "../../../assets/images/Cart.png";
const NavIcons = ()=>{

  return(
    <div  style={{display:"flex", gap:"1em", alignItems:"center"}} >
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