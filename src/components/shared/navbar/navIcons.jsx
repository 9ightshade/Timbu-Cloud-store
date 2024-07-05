import search from "../../../assets/react.svg";

import profile from "../../../assets/react.svg";
import fav from "../../../assets/react.svg";
import cart from "../../../assets/react.svg";
const NavIcons = ()=>{

  return(
    <div>
      <img src={search} alt="search icon" /><img src={profile} alt="profile icon" /><img src={fav} alt="fav icon" /><img src={cart} alt="cart icon" />
    </div>
  )
}

export default NavIcons;