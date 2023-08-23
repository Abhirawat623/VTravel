export const dateReducer =(state,{type,payload})=>{
    switch( type){
        case "Open_search_modal":
            return{
                ...state,
                isSearchModalOpen : !state.isSearchModalOpen
    }
        default : return state
    }
}