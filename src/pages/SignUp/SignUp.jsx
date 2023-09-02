import "../SignUp/SignUp.css";
import { Navbar, Footer } from "../../components/index";
import { useAuth } from "../../context/index";
export const SignUp = () => {
  const { email, password, name, number, confirmPassword, authDispatch } =
    useAuth();

  const handlePasswordSignupChange = (event) => {
    authDispatch({
      type: "PASSWORD",
      payload: event.target.value,
    });
  };
  const handleNameSignupChange = (event) => {
    authDispatch({
      type: "NAME",
      payload: event.target.value,
    });
  };
  const handleMobileSignupChange = (event) => {
    authDispatch({
      type: "NUMBER",
      payload: event.target.value,
    });
  };
  const handleEmailSignupChange = (event) => {
    authDispatch({
      type: "EMAIL",
      payload: event.target.value,
    });
  };
  const handleConfirmPasswordSignupChange = (event) => {
    authDispatch({
      type: "CONFIRM_PASSWORD",
      payload: event.target.value,
    });
  };
  console.log(name, password, confirmPassword, number, email);
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
                  <label className="form-label color-white ml-l">Name*</label>
                  <input
                    className="input-form"
                    placeholder="Enter Full Name"
                    required
                    value={name}
                    onChange={handleNameSignupChange}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label color-white ml-l">E-mail*</label>
                  <input
                    className="input-form"
                    placeholder="Enter E-mail"
                    required
                    value={email}
                    onChange={handleEmailSignupChange}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label color-white ml-l">
                    Password*
                  </label>
                  <input
                    className="input-form"
                    placeholder="*********"
                    required
                    onChange={handlePasswordSignupChange}
                    value={password}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label color-white ml-l">
                    Confirm Password*
                  </label>
                  <input
                    className="input-form"
                    placeholder="*********"
                    required
                    onChange={handleConfirmPasswordSignupChange}
                    value={confirmPassword}
                  />
                </div>
                <label className="form-label color-white  ">
                  Mobile Number*
                </label>
                <input
                  className="input-form"
                  placeholder="Enter Mobile Number"
                  maxLength={10}
                  required
                  value={number}
                  onChange={handleMobileSignupChange}
                />
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
