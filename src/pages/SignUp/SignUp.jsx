import "../SignUp/SignUp.css";
import { Navbar, Footer } from "../../components/index";

export const SignUp = () => {
  return (
    <>
      <Navbar />
      <div className=" auth-login-container">
        <div className="auth-login d-flex justify-center dir-col align-center">
          <h2 className="color-white signup">Sign Up</h2>
          <form className="d-flex dir-col gap-s align-center">
            <span className="auth-signup-background">
              <div className="auth-form">
                <div className="auth-form">
                  <label className="form-label color-white ml-l">Name</label>
                  <input className="input-form" placeholder="Full Name" />
                </div>
                <div className="auth-form">
                  <label className="form-label color-white ml-l">
                    Password
                  </label>
                  <input className="input-form" placeholder="*********" />
                </div>
                <label className="form-label color-white  ">
                  Mobile Number
                </label>
                <input className="input-form" placeholder="Valid Number" />
              </div>
              <div className="auth-form">
                <label className="form-label color-white ml-l">e-mail</label>
                <input className="input-form" placeholder="xyz@abc.com" />
              </div>
            </span>
       
              <button className="auth-login-btn ">Create Account</button>
          
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
