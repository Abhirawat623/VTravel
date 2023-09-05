import { useNavigate } from "react-router-dom";
import { useWishlist, useAuth } from "../../context/index";
import { findHotelInWishlist } from "../../utils/index";
export const HotelCard = ({ items }) => {
  const { _id, name, image, address, state, rating, price } = items;

  const { wishlist, wishlistDispatch } = useWishlist();

  const { accessToken } = useAuth();

  //for navigate
  const navigate = useNavigate();
  const handleClickedHotel = () => {
    navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
  };
  console.log({wishlist})
  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const handleWishlistClick = () => {
    if (accessToken) {
      if (!isHotelInWishlist) {
        {
          wishlistDispatch({
            type: "ADDING_WISHLIST",
            payload: items,
          });
        }
      }
    else {
      wishlistDispatch({
        type: "REMOVING_WISHLIST",
        payload: _id,
      });
    }
  }
  };



  return (
    <div className="hotel-container d-flex dir-col">
      <div className="hotel-image-container" onClick={handleClickedHotel}>
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
        <div className={` ${isHotelInWishlist? 'favourite-selected': "wishlist-icon"}`} onClick={handleWishlistClick}>
          <span class="material-icons-outlined ">favorite</span>
        </div>
        <div className="star ">
          <span className="material-icons-outlined">star</span>
          <span className="star-rating">{rating}</span>
        </div>
      </div>
    </div>
  );
};
