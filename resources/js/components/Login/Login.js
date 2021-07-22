import { useState } from "react";


const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setPass] = useState('');
const handleSubmit = (e) => {
  e.preventDeafult();
  
  const body ={email,password};
      
    fetch('http://localhost:8000/api/login' , {
      method : 'POST',
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    }).then(()=>{
      history.push('/')
    });

}
 return ( 
   <div className="Login">
    <section class="normal-breadcrumb set-bg" style={{backgroundImage : `url("img/normal-breadcrumb.jpg")`}} data-setbg="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="normal__breadcrumb__text">
            <h2>Login</h2>
            <p>Welcome to the official Anime blog.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="login spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="login__form">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
              <div class="input__item">
                <input type="text" placeholder="Email address" value={email} onChange={ e => setEmail(e.target.value)}/>
                <span class="icon_mail"></span>
              </div>
              <div class="input__item">
                <input type="text" placeholder="Password" value={password} onChange={ e => setPass(e.target.value)} />
                <span class="icon_lock"></span>
              </div>
              <button type="submit" class="site-btn">Login Now</button>
            </form>
            <a href="#" class="forget_pass">Forgot Your Password?</a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="login__register">
            <h3>Dont’t Have An Account?</h3>
            <a href="#" class="primary-btn">Register Now</a>
          </div>
        </div>
      </div>
      <div class="login__social">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6">
            <div class="login__social__links">
              <span>or</span>
              <ul>
                <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> Sign in With
                    Facebook</a></li>
                <li><a href="#" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> Sign in With Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   </div>
  );
}
 
export default Login;