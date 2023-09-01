<<<<<<< HEAD
// export const getHotelsByType = (hotels,propertyType)=>{
//     if(propertyType=== "Any")
//     return hotels;

//     const filteredHotels = hotels.map((hotel)=>(
//         hotel.propertyType === propertyType));
//         return filteredHotels;
// }


export const getHotelsByType = (hotels, propertyType) => {
    if (propertyType === "Any") return hotels;
    const filteredHotels = hotels.filter(
      (hotel) => hotel.propertyType === propertyType
    );
    return filteredHotels;
  };
=======
export const getHotelsByType = (hotels,hotelType)=>{
    if(hotelType=== "Any")
    return hotels;

    const filteredHotels = hotels.map((hotel)=>(
        hotel.propertyType === hotelType));
        return filteredHotels;
}
>>>>>>> 2422359ef2e7332573b01198d6fd1619da84a7ce
