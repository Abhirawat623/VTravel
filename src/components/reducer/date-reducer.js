export const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_SEARCH_MODAL":
      return {
        ...state,
        isSearchModalOpen: !state.isSearchModalOpen,
      };
    case "CHECK_IN":
      return { ...state, dateCheckIn: payload };

    case "CHECK_OUT":
      return {
        ...state,
        dateCheckOut: payload,
      };
    case "LOCATION":
      return {
        ...state,
        location: payload,
      };
    case "GUESTS":
      return {
        ...state,
        guests: payload,
      };
    case "OPEN_LOCATION_LIST":
      return {
        ...state,
        islocationListOpen: true,
      };
    case "ClOSE_LOCATION_LIST":
      return { ...state,
        islocationListOpen: false };
    default:
      return state;
  }
};
