import { useFilter } from "../../../context/index";

const quantityOfRoomsandBeds = ["Any", "1", "2", "3", "4", "5"];

export const HotelRooms = () => {
  return (
    <div className="filter-component-container">
      <div className="filter-rooms-container ">Bed And Rooms</div>
      <div>
        <span className="filter-rooms-label">Bedrooms</span>
        <span className="filter-component-box selected">
    
          {quantityOfRoomsandBeds.map((number) => (
            <span className="filter-hotel-rooms-box selected" key={number}>
              {number}
            </span>
          ))}
        </span>
      </div>
      <div>
        <span className="filter-rooms-label">Beds</span>
        <span className="filter-hotel-rooms-box selected"></span>
      </div>
      <div>
        <span className="filter-rooms-label">Bathrooms</span>
        <span className="filter-hotel-rooms-box selected"></span>
      </div>
    </div>
  );
};
