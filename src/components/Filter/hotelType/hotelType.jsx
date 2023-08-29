import { v4 as uuid } from "uuid";
import { useFilter } from "../../../context/index";

const propertyType = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const HoteType = () => {
  const { hotelType, filterDispatch } = useFilter();
  console.log(hotelType);
  //logic
  const handlePropertyClick = (property) => {
    filterDispatch({
      type: "HOTEL_TYPE",
      payload: property,
    });
  };

  return (
    <div className="filter-component-container d-flex dir-col align-center gap-s">
      <label className="filter-label-name">Type</label>

      <div className="filter-hotel-type-icons ">
        {propertyType.map(({ id, type }) => (
          <span 
          className={`${hotelType===type? 'selected':''} property-type`}
          key={id}
          onClick={() => handlePropertyClick(type)}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
