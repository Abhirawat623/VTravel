export const getHotelsByType = (hotels,propertyType)=>{
    if(propertyType=== "Any")
    return hotels;

    const filteredHotels = hotels.map((hotel)=>(
        hotel.propertyType === propertyType));
        return filteredHotels;
}