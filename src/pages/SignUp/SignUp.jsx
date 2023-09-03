import "../SignUp/SignUp.css";
import { Navbar, Footer } from "../../components/index";
import { useAuth } from "../../context/index";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils/index";
import { signupHandle } from "../../services/index";

export const SignUp = () => {
  const { email, password, username, number, confirmPassword, authDispatch } =
    useAuth();

  let isNameValid,
    isPasswordValid,
    isNumberValid,
    isEmailValid,
    isConfirmPasswordValid;

  const handlePasswordSignupChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleNameSignupChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      authDispatch({
        type: "USERNAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };
  const handleMobileSignupChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Mobile Number");
    }
  };
  const handleEmailSignupChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid E-Mail");
    }
  };
  const handleConfirmPasswordSignupChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);

    if (isConfirmPasswordValid) {
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      signupHandle(username, number, email, password);
    }
    authDispatch({
      type: "CLEAR_SIGNUP",
    });
  };
  console.log(username, password, email, number);

  return (
    <>
      <Navbar />
      <div className=" auth-login-container">
        <div className="auth-login d-flex justify-center dir-col align-center">
          <h2 className="color-white signup">Sign Up</h2>
          <form
            onSubmit={handleFormSubmit}
            className="d-flex dir-col gap-s align-center"
          >
            <span className="auth-signup-background">
              <div className="auth-form">
                <div className="auth-form">
                  <label className="form-label color-white ml-l">Name*</label>
                  <input
                    className="input-form"
                    placeholder="Enter Name"
                    required
                    defaultValue={username}
                    onChange={handleNameSignupChange}
                  />
                </div>
                <div className="auth-form">
                  <label className="form-label color-white ml-l">E-mail*</label>
                  <input
                    className="input-form"
                    placeholder="Enter E-mail"
                    required
                    defaultValue={email}
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
                    defaultValue={password}
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
                    defaultValue={confirmPassword}
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
                  defaultValue={number}
                  onChange={handleMobileSignupChange}
                />
              </div>
            </span>
            <button className="auth-login-btn ">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};