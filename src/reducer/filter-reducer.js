
export const filterReducer =(state,{type,payload})=>{

switch (type) {

 case  "IS_FILTER_OPEN":
    return{
        ...state,
        isFilterModalOpen: !state.isFilterModalOpen
    }
    default:
        return state;
}


}