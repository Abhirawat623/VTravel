export const getHotelsByRoomsAndBeds=(hotels,noOfBedrooms,noOfBeds,noOfBathrooms)=>{

    if(noOfBathrooms==="Any" || noOfBedrooms ==="Any" || noOfBeds ==="Any")
    return hotels;

     const filteredHotels= hotels.filter(({numberOfbeds,numberOfBedrooms, numberOfBathrooms})=>
        (numberOfBathrooms === noOfBathrooms ||
        numberOfBedrooms === noOfBedrooms ||
        numberOfbeds === noOfBeds)
     );
     return filteredHotels;
}