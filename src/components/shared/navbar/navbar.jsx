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
        <Logo />
        <NavIcons />
        <div className="hamburger" >
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </div>

  )
};

export default NavBar;