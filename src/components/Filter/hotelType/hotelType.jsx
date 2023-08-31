import { v4 as uuid } from "uuid";
import { useFilter } from "../../../context/index";

const propertyTypes = [
 
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const HoteType = () => {
  const { propertyType, filterDispatch } = useFilter();
  console.log(propertyType);
  //logic
  const handlePropertyClick = (type) => {
    filterDispatch({
      type: "HOTEL_TYPE",
      payload: type,
    });
  };

  return (
    <div className="filter-component-container d-flex dir-col align-center gap-s">
      <label className="filter-label-name">Type</label>

      <div className="filter-hotel-type-icons ">
        {propertyTypes.map(({ id, type }) => (
          <span 
          className={`${propertyType===type? 'selected':''} property-type`}
          key={id}
          onClick={() => handlePropertyClick(type)}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
