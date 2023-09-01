import { Fragment } from "react";
import "../Login/Login.css";
import { Navbar, Footer } from "../../components/index";

export const Login = () => {
  return (
    <Fragment>
      <Navbar />
      <div className=" auth-login-container">
        <div className="auth-login d-flex justify-center dir-col align-center">
          <h2 className="color-white">Login</h2>
          <form className="d-flex dir-col gap-m align-center">
            <div className="auth-form ml-s">
              <label className="form-label color-white  ml-l">Username</label>
              <input placeholder="Username" />
            </div>
            <div className="auth-form">
              <label className="form-label color-white ml-l">Password</label>
              <input placeholder="*********" />
            </div>
            <div className="cta">
              <button className="auth-login-btn gap-l .color-white">
                Login
              </button>
            </div>
          </form>
          <button className="test-btn">Login with Test Credentials</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
