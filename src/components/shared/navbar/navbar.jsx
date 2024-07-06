import Logo from "../logo/logo";
import NavIcons from "./navIcons";
import NavLinks from "./navlinks";

const NavBar = () => {
  
  return (
  
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}  >
      
<Logo/>

<NavLinks/>

    <NavIcons/>
</div>

)



}

export default NavBar;