import "../orderSummaryComponent/orderSummaryComponent.css";
import { useNavigate } from "react-router-dom";
import {useDate,useFilter,useHotel}from "../../context/index";

export const OrderSummaryComponent = ({items}) => {

    const navigate = useNavigate();

    const {dateDispatch} = useDate();
    const { filterDispatch} = useFilter();
 
    const {hotel}=useHotel();

    const { name, image, city, state} = hotel;

    let bookingId = Math.floor(Math.random() * 1000000000);

    const handleContinueBookingClick = () => {
        dateDispatch({
            type: "CLEAR_INPUTS"
        })
        filterDispatch({
            type: "CLEAR_ALL"
        })
        navigate("/");
    }


  return (
    <div className="os-container d-flex dir-col shadow gap-s">
      <div className="d-flex align-center space-between br-bottom pd-small">
        <h2>Order Summary</h2>
        <button
          className="button btn-auth btn-close cursor-pointer d-flex align-center justify-center"
          onClick={handleContinueBookingClick}
        >
          <span class="material-icons-outlined">close</span>
        </button>
      </div>
      <span className="span-md">Booking ID: {bookingId}</span>
      <div className="d-flex align-center space-between br-bottom pd-small">
        <div className="d-flex dir-col hoteldetails">
          <span className="fs-md">{name}</span>
          <span className="span-md">
            {city}, {state}
          </span>
        </div>
        <div>
          <img className="img" src={image} alt={name} />
        </div>
      </div>
    
      <div>
        <button
          className=" btn-primary "
          onClick={handleContinueBookingClick}
        >
          Continue Booking
        </button>
      </div>
    </div>
  );
};
