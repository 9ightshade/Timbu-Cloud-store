import heroImage from "../../../assets/images/hero-image.png"
const Hero = ()=>{

  return(
    <div>
      <div>
      <img src={heroImage} style={{ width: "100%" }} alt="hero image" />
      </div>
      
      <h2 style={{margin:"1.3em 0"}} >
        All Products
      </h2>
  </div>
  )
};

export default Hero;