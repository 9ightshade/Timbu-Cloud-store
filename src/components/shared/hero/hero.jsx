import heroImage from "../../../assets/images/hero-image.png"
const Hero = ()=>{

  return(
    <div>
        <div style={{border:"2px red solid", position:"relative"}} >
      <img src={heroImage} style={{ width: "100%" }} alt="hero image" />
      {/* <h1 style={{position:"absolute", left:"50%", bottom:"50%" }} >
        Shop
      </h1> */}
      </div>
      
      <h2>
        All Products
</h2>

  </div>
  )
};

export default Hero;