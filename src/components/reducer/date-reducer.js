export const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "Open_search_modal":
      return {
        ...state,
        isSearchModalOpen: !state.isSearchModalOpen,
      };
    case "CHECK_IN":
      return { ...state, 
        dateCheckIn: payload };

    case "CHECK_OUT":
      return {
        ...state,
        dateCheckOut: payload,
      };
    default:
      return state;
  }
};
