export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "IS_FILTER_OPEN":
      return {
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen,
      };

    // case "MINIMUM_PRICE":
    //     return {
    //         ...state,
    //         priceRange: [
    //           Math.min(
    //             payload.newValue[0],
    //             payload.priceRange[1] - payload.minDifference
    //           ),
    //           payload.priceRange[1],
    //         ],
    //       };

    //  case "MAXIMUM_PRICE":
    //     return{
    //         ...state,
    //         priceRange: [
    //           payload.priceRange[0],
    //           Math.max(
    //             payload.newValue[1],
    //             payload.priceRange[0] + payload.minDifference
    //           ),
    //         ],
    //     }

    case "MINIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          Math.min(
            payload.newValue[0],
            payload.priceRange[1] - payload.minDifference
          ),
          payload.priceRange[1],
        ],
      };
    case "MAXIMUM_PRICE":
      return {
        ...state,
        priceRange: [
          payload.priceRange[0],
          Math.max(
            payload.newValue[1],
            payload.priceRange[0] + payload.minDifference
          ),
        ],
      };
    case "IS_CANCEL":
      return {
        ...state,
        isCancellable: payload,
      };

    case "HOTEL_TYPE":
      return {
        ...state,
        propertyType: payload,
      };
    case "RATING":
      return {
        ...state,
        vTravelRating: Number(payload),
      };

    case "NUMBER_OF_BEDS":
      return {
        ...state,
        noOfBeds:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
          
      };
    case "NUMBER_OF_BEDROOMS":
      return {
        ...state,
        noOfBedrooms:
          payload === "Any" ? payload : payload === "5+" ? 5 : Number(payload),
      };

    case "NUMBER_OF_BATHROOMS":
      return {
        ...state,
        noOfBathrooms:
          (payload === "Any" / payload) === "5+" ? 5 : Number(payload),
      };
    default:
      return state;
  }
};
