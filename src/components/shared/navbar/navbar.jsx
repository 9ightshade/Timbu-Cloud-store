import Logo from "../logo/logo";
import NavIcons from "./navIcons";
import NavLinks from "./navlinks";
import "./navbar.css";

const NavBar = () => {

  return (
    <div>
      <div className="desktop-view-navbar">
        <Logo />
        <NavLinks />
        <NavIcons />
      </div>


      <div className="mobile-view-navbar" >

      </div>
    </div>

  )
};

export default NavBar;