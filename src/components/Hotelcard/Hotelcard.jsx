import { useNavigate } from "react-router-dom";

export const HotelCard = ({ items }) => {
  
  const { _id, name, image, address, state, rating, price } = items;
  //for navigate
  const navigate = useNavigate();
  const handleClickedHotel = () => {
    navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
  };

  return (
    <div
      className="hotel-container d-flex dir-col"
      onClick={handleClickedHotel}
    >
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
        <div className="hotel-price">
          <span className="color-price">Rs.{price}</span>/Night
        </div>
        <div className="star  ">
          <span className="material-icons-outlined">star</span>
          <span className="star-rating">{rating}</span>
        </div>
      </div>
    </div>
  );
};
