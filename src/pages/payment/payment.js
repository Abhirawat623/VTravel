import "../payment/payment.css";
import { useParams,useNavigate,Link} from "react-router-dom";
import { useHotel,useDate } from "../../context/index";
import { useState,useEffect,Fragment } from "react";
import axios from "axios";

export const Payment = () => {





    const params = useParams();
    const { id } = params;
  
    const navigate = useNavigate();
  
    const { guests, dateCheckIn, dateCheckOut } = useDate();
  
    const { setHotel } = useHotel();
  
    const numberOfNights =
      dateCheckIn && dateCheckOut
        ? (dateCheckOut.getTime() - dateCheckIn.getTime()) / (1000 * 3600 * 24)
        : 0;
  
    const [singleHotel, setSingleHotel] = useState({});
  
    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://aware-foal-lingerie.cyclic.app/api/hotels/${id}`
          );
          console.log(data);
          setSingleHotel(data);
        } catch (err) {
          console.log(err);
        }
      })();
    }, [id]);
  
    const { image, name, address, state, rating, price } = singleHotel;
  
    const totalPayableAmount = price * numberOfNights + 150;


  return (
    <Fragment>
      <header className="heading">
      
          <Link to="/">
            <h2 className="head">Back to Home &#127750;</h2> 
          </Link>
        
      </header>
      <main className="payment-page d-flex justify-center dir-row border">
        <div className="final-details-container d-flex dir-col gap-m border">
          <h2>Trip Details</h2>
          <div className="dates-and-guests d-flex dir-col gap-m">
            <h3>Your Trip</h3>
            <div>
              <p>Dates</p>
              <span>
                {dateCheckIn.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {dateCheckOut.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div>
              <p>Guests</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className="d-flex dir-col gap-s">
            <h3>Pay with</h3>
            <div>Razorpay</div>
          </div>
          <button
            className="button"
            // onClick={handleConfirmBookingClick}
          >
            Confirm Booking
          </button>
        </div>
        <div className="final-details d-flex dir-col gap-l">
          <div className="d-flex gap-s">
            <img className="image" src={image} alt={name} />
            <div className="d-flex dir-col">
              <div className="d-flex dir-col grow-shrink-basis">
                <span>{name}</span>
                <span>
                  {address}, {state}
                </span>
              </div>
              <div className="rating-container">
                <span className="rating d-flex align-center">
                  <span className="material-icons-outlined">star</span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="tag">
            Your booking is protected by{" "}
            <strong >V TRAVEL</strong> 
          </div>
          <div className="price-detail-container">
            <div className="price-distribution d-flex dir-col">
              <h3>Price Details</h3>
              <div className="final-price d-flex align-center space-between">
                <span className="span">
                  Rs. {price} x {numberOfNights} nights
                </span>
                <span className="span">Rs. {price * numberOfNights}</span>
              </div>
              <div className="final-price d-flex align-center space-between">
                <span className="span">Service fee</span>
                <span className="span">Rs. 200</span>
              </div>
              <div className="final-price d-flex align-center space-between">
                <span className="span">Total</span>
                <span className="span">Rs. {totalPayableAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};
