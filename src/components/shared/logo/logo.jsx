import Timbu  from "../../../assets/images/LOGO.png";
import { useNavigate } from "react-router-dom";

const Logo = ()=>{

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  console.log("clicked");
  };


return(
  <div  style={{cursor:"pointer"}} onClick={()=>{handleClick()}}  >
    <img src={Timbu} alt="Timbu Logo" />
  </div>
)
};


export default Logo;