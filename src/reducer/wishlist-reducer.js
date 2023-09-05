export const wishlistReducer =( state,{type,payload})=>{
    switch(type){
   
        case "ADDING_WISHLIST":
            return{
            ...state,
            wishlist:[...state.wishlist, payload]
            }
         
        case "REMOVING_WISHLIST":
            return{
            ...state,
            wishlist: state.wishlist.filter((hotel) => hotel._id !== payload),
            //hotel=> hotel.id!==payload
            }
        case "CLEAR_ALL_WISHLIST":
            return{
                ...state,
                wishlist:[]
            }

        default:
             return state;
    }
}