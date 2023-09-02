import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import { Navbar, Footer } from "../../components/index";


export const Login = () => {
 
  
  return (
    <Fragment>
      <Navbar />
      <div className=" auth-login-container signup-container">
        <div className="auth-login d-flex justify-center dir-col align-center">
          <h2 className="color-white">Login</h2>
          <form className="d-flex dir-col gap-s align-center">
            <span className="auth-background">
              <div className="auth-form">
                <label className="form-label color-white  ">
                  Mobile Number
                </label>
                <input
                  className="input-form"
                  placeholder="Mobile Number input"
                />
              </div>
              <div className="auth-form">
                <label className="form-label color-white ml-l">Password</label>
                <input className="input-form" placeholder="*********" />
              </div>
            </span>
            <div className="cta">
              <button className="auth-login-btn ">Login</button>
            </div>
          </form>
         <Link to="/signup"> <button className="test-btn">Sign Up</button></Link>
          <button className="test-btn">Login with Test Credentials</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
