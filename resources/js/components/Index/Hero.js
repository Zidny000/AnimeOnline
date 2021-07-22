import { Link } from "react-router-dom";



const Hero = () => {



 return ( 
   
  <div className="Hero">
    
   <section class="hero">
    <div class="container">
      
      <div class="hero__slider owl-carousel">
      
        <div class="hero__items set-bg item" style={{backgroundImage : `url("img/hero/hero-1.jpg")`}}>
          <div class="row">
            <div class="col-lg-6">
              <div class="hero__text">
                <div class="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="hero__items set-bg item" style={{ backgroundImage : `url("http://127.0.0.1:8000/img/hero/hero-1.jpg")`}} >
          
          <div class="row">
            <div class="col-lg-6">
              <div class="hero__text">
                <div class="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="hero__items set-bg item"  style={{ backgroundImage : `url("http://127.0.0.1:8000/img/hero/hero-1.jpg")`}}>
          <div class="row">
            <div class="col-lg-6">
              <div class="hero__text">
                <div class="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#"><span>Watch Now</span> <i class="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </section>

  </div>
  );
}
 
export default Hero;