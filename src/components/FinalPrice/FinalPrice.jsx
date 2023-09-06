import { useDate,useAuth } from "../../context";
import { DateSelector } from "../index";
import { useNavigate } from "react-router-dom";
export const FinalPrice = ({ items }) => {
  const navigate = useNavigate();
  const { price, rating,_id} = items;
  const {accessToken}= useAuth();
  const { dateCheckIn, dateCheckOut, guests, dateDispatch } = useDate();

  const handleeGuestsChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

const handleReserveClick =()=>{
if(accessToken){
 navigate(`/confirm-booking/stay/:${_id}`)

}
}

  return (
    <div className="final-price-container gap-s">
      <div className="final-price-rate-container d-flex dir-row gap-xl ">
        <div className="final-price-cost">Rs. {price}</div>
        <div className=" d-flex dir-row align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </div>
      </div>
      <div className="final-price-check-typecontainer d-flex dir-row gap-xl ">
        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Check In</label>
          <DateSelector checkInType="in" />
        </div>
        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Check Out</label>
          <DateSelector checkInType="out" />
        </div>
        </div>
        <div className="final-price-guests">
          <div className="guests ">
            <p>GUESTS</p>
            {guests <= 0 ? (
              <input
                className="guest-count-input"
                type="number"
                placeholder="Add Guests"
                value={guests}
                onChange={handleeGuestsChange}
              />
            ) : (
              <span>{guests} guests</span>
            )}
          </div>
        </div>

        <button
          className="reserve-button pointer-cursor"
          onClick={handleReserveClick}
          disabled={dateCheckIn && dateCheckOut && guests >0 ?false:true}
        >
          Reserve
        </button>
   
       <div className="price-distribution d-flex dir-col ">
        <div className="final-price d-flex align-center gap-s space-between ">
          <span className="span">Rs. {price} x 2 Nights</span>
          <span className="span">Rs. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center space-between ">
          <span className="span">Service fee</span>
          <span className="span">Rd. 200</span>
        </div>
        <div className="final-price d-flex align-center space-between">
          <span className="span">Total</span>
          <span className="span text-bold ">Rs. {price * 2 + 200}</span>
        </div>  
        </div>
    
     


    </div>
  );
};
