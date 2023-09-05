import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/index";

const initialValue = {
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword:"",
  accessToken:"",
  name:""
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [{ username, number, password, email,confirmPassword,accessToken,name }, authDispatch] = useReducer(
    authReducer,
    initialValue
  );
  return (
    <AuthContext.Provider
      value={{ email, password, number,username,confirmPassword,name,accessToken, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
