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
          <span className="address">
            {address},{state}
          </span>
          <span className="hotel-name">{name}</span>
        </div>
      </div>
      <div className="hotel-footer">
        <div className="hotel-price"><span className="color-price">Rs.{price}</span>/Night</div>
        <div className="star  ">
          <span className="material-icons-outlined">star</span>
          <span className="star-rating">{rating}</span>
        </div>
      </div>
    </div>
  );
};
