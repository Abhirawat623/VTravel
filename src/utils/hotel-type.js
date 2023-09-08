
// export const getHotelsByType = (hotels,propertyType)=>{
//     if(propertyType=== "Any")
//     return hotels;

//     const filteredHotels = hotels.map((hotel)=>(
//         hotel.propertyType === propertyType));
//         return filteredHotels;
// }


// export const getHotelsByType = (hotels, propertyType) => {
//     if (propertyType === "Any") return hotels;
//     const filteredHotels = hotels.filter(
//       (hotel) => hotel.propertyType === propertyType
//     );
//     return filteredHotels;
//   };

export const getHotelsByType = (hotels,hotelType)=>{
    if(hotelType=== "Any")
    return hotels;

    const filteredHotels = hotels.filter((hotel)=>(
        hotel.propertyType === hotelType));
        return filteredHotels;
}
