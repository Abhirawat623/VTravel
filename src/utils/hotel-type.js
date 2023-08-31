export const getHotelsByType = (hotels,hotelType)=>{
    if(hotelType=== "Any")
    return hotels;

    const filteredHotels = hotels.map((hotel)=>(
        hotel.propertyType === hotelType));
        return filteredHotels;
}