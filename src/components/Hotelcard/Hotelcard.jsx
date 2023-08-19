export const HotelCard = ({ items }) => {
  console.log(items);
  const { name, image, address, state, rating, price } = items;

  return (
    <div className="hotel-container d-flex dir-col">
      <div className="hotel-image-container">
        <img src={image} alt={name} className="hotel-image" />
      </div>
      <div className="hotel-description">
        <div className="d-flex dir-col ">
          <span>
            {address},{state}
          </span>
          <span>{name}</span>
        </div>
      </div>
      <div className="hotel-footer d-flex  space-between">
        <span>Rs.{price}/Night</span>
        <div className="star">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};
