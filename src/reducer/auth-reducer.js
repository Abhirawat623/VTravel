export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "NAME":
      return {
        ...state,
        name: payload,
      };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };

    default:
      return state;
  }
};
