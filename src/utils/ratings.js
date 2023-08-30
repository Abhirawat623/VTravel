export const  getHotelsByRatings= ( hotels, vTravelRating)=>{
 const filteredHotels = hotels.filter((hotel)=> hotel.rating >= vTravelRating);
 return filteredHotels
}