import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/index";

const initialValue = {
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword:"",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [{ username, number, password, email,confirmPassword }, authDispatch] = useReducer(
    authReducer,
    initialValue
  );
  return (
    <AuthContext.Provider
      value={{ email, password, number,username,confirmPassword, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
