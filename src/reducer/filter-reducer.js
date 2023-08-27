
export const filterReducer =(state,{type,payload})=>{

switch (type) {

 case  "IS_FILTER_OPEN":
    return{
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen
    }

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
  return{
    ...state,
    isCancellable:payload
  }

    default:
        return state;
}


}