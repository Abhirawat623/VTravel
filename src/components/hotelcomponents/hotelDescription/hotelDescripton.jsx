export const HotelDescription = ({ items }) => {
  const {
    numberOfBathrooms,
    numberOfBeds,
    numberOfguest,
    numberOfBedrooms,
    propertyType,
  } = items;
  return (
    <div className="single-hotel-details-container gap-s ">
      <div className="span hotel-room-details text-l underline">
        {numberOfguest} guests. {numberOfBedrooms} bedrooms. {numberOfBeds}{" "}
        beds. {numberOfBathrooms} bathrooms.
      </div>
      <div className="d-flex dir-row space-between text-s">
        <div className=" smile-rebook d-flex align-center ">
          <span className="material-icons-outlined ">emoji_emotions</span>
          <span className="white-color">90% Rebooking</span>
        </div>
        <div className="house-emoji d-flex align-center ">
          <span className=" material-icons-outlined">night_shelter</span>
         <span className="white-color">{propertyType}</span> 
        </div>
      </div>

      <div className="key-features text-s">
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center">
            <span className="checklist material-icons-outlined">apps</span>Dedicated
            Workspace
          </p>
        </div>
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center ">
            <span className="checklist material-icons-outlined">apps</span>
            Refundable
          </p>
        </div>
        <div className="gutter-bottom-small">
          <p className="p d-flex align-center">
            <span className="checklist material-icons-outlined">apps</span>Great
            Location
          </p>
        </div>
        <p className="p d-flex align-center">
          <span className="checklist material-icons-outlined">apps</span>Free
          cancellation before 7 days of booking
        </p>
      </div>
      <div className="amenities-container">
        <p className="p amenities underline">What this place offers</p>
        <div className="d-flex dir-row space-between text-s">
          <div className="whats-for">
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Kitchen
            </span>
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Free parking
            </span>
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Dedicated Workspace
            </span>
          </div>
          <div className="d-flex dir-col ">
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Wifi
            </span>
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Washing Machine
            </span>
            <span className="span d-flex align-center gap-s">
              <span className="checklist material-icons-outlined">checklist</span>
              Patio or Balcony
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
