import "./navlinks.css";

const NavLinks = () => {

return(
<ul style={{display:"flex", gap:"1em",alignItems:"center", listStyle:"none"}} >
  <li>
    <a href="#">
      Home
    </a>
  </li>
  <li>
    <a href="#">
      Products
    </a>
  </li>
  <li>
    <a href="#">
      Shop
    </a>
  </li>
  <li>
    <a href="#">
      About
    </a>
  </li>
  <li>
    <a href="#"
    >Contact Us
    </a>
  </li>
</ul>
)
}

export default NavLinks