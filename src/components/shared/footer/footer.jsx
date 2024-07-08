import copyright from "../../../assets/images/copyright.png"
import Logo from "../logo/logo";
import "./footer.css";
const Footer = () => {

return(

  <div className="copyright" >

    <div>
      <img src={copyright} alt="copyright" />
    </div>
    <Logo/>
    <p>
      2024
    </p>

  </div>


)


}

export default Footer;