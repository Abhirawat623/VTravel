export const findHotelInWishlist =(wishlist,id)=>{
    const isHotelINWishList= wishlist.some((hotel)=> hotel._id  === id)
    return isHotelINWishList;
}


// export const findHotelInWishlist = (wishlist, id) => {
//     const isHotelInWishlist = wishlist.some((hotel) => hotel._id === id);
//     return isHotelInWishlist;
//   };