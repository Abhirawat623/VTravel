import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer/index";

const initialValue = {
  name: "",
  number: "",
  email: "",
  password: "",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [{ name, number, password, email }, authDispatch] = useReducer(
    authReducer,
    initialValue
  );
  return (
    <AuthContext.Provider
      value={{ email, password, number, name, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
