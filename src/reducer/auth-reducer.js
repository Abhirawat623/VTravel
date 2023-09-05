export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "USERNAME":
      return {
        ...state,
        username: payload,
      };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
      case "CONFIRM_PASSWORD":
        return {
          ...state,
          confirmPassword: payload,
        };
        case "CLEAR_SIGNUP":
          return{...state,
          username:"",
        number:"",
      password:"",
    email:"",
  confirmPassword:""}

  case "SET_ACCESS_TOKEN":
    return {
      ...state,
      accessToken: payload,
    };
  case "SET_USER_NAME":
    return {
      ...state,
      name: payload,
    };
    case "LOGOUT_CLEAR":
      return{
        ...state,
        accessToken:"",
        name:""
      }
  
    default:
      return state;
  }
};
