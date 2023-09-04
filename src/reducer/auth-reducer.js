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
  
    default:
      return state;
  }
};
