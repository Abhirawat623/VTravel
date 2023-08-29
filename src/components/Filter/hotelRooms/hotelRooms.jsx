import { useFilter } from "../../../context/index";

const quantityOfRoomsandBeds = ["Any", "1", "2", "3", "4", "5+"];

export const HotelRooms = () => {
  const { numberOfBeds, numberOfBedrooms, numberOfBathrooms, filterDispatch } = useFilter();
  const handleBedrooms = (number) => {
    filterDispatch({
      type: "NUMBER_OF_BEDROOMS",
      payload: number,
    });
  };

  const handleBeds = (number) => {
    filterDispatch({
      type: "NUMBER_OF_BEDS",
      payload: number,
    });
  };

  const handleBathrooms = (number) => {
    filterDispatch({
      type: "NUMBER_OF_BATHROOMS",
      payload: number,
    });
    console.log(number)
  };

  return (
    <div className="filter-component-container">
      <div className="filter-rooms-container ">Bed And Rooms</div>
      <div className="filter-rooms">
        <span className="filter-rooms-label">Bedrooms</span>

        {quantityOfRoomsandBeds.map((number) => (
          <span
            className={`${
              numberOfBedrooms === number ? "selected" : ""
            } filter-hotel-rooms-box `}
            key={number}
            onClick={() => handleBedrooms(number)}
          >
            {number}
          </span>
        ))}
      </div>
      <div className="filter-rooms">
        <span className="filter-rooms-label">Beds</span>

        {quantityOfRoomsandBeds.map((number) => (
          <span
            className={`${
              numberOfBeds === number ? "selected" : ""
            } filter-hotel-rooms-box `}
            key={number}
            onClick={() => handleBeds(number)}
          >
            {number}
          </span>
        ))}
      </div>
      <div className="filter-rooms">
        <span className="filter-rooms-label">Bathrooms</span>

        {quantityOfRoomsandBeds.map((number) => (
          <span
            className={`${
              numberOfBathrooms === number ? "selected" : ""
            } filter-hotel-rooms-box `}
            key={number}
            onClick={() => handleBathrooms(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};
