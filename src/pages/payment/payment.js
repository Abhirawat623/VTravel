import "../payment/payment.css";
import { useParams,useNavigate,Link} from "react-router-dom";
import { useHotel,useDate } from "../../context/index";
import { useState,useEffect, Fragment } from "react";
import {Navbar,Footer} from "../../components/index";

import axios from "axios";

export const Payment = () => {


    const { id } = useParams();
 console.log(id)
    //for singleHotteldata
  
    const [singleHotel, setSingleHotel] = useState({});
  
  
    const navigate = useNavigate();
  
    const { guests, dateCheckIn, dateCheckOut } = useDate();
  
    const { setHotel } = useHotel();
  
    const numberOfNights =
      dateCheckIn && dateCheckOut
        ? (dateCheckOut.getTime() - dateCheckIn.getTime()) / (1000 * 3600 * 24)
        : 0;
  
   
  
        useEffect(() => {
            (async () => {
              try {
                const { data } = await axios.get(
                  `https://aware-foal-lingerie.cyclic.app/api/hotels/${id}`
                );
                setSingleHotel(data);
                console.log(singleHotel);
              } catch (err) {
                console.log(err);
              }
            })();
          }, [id]);
  
    const { image, name, address, state, rating, price } = singleHotel;
  
    const totalPayableAmount = price * numberOfNights + 150;


  return (
    <Fragment>
      <Navbar/>
      <header className="heading">
      
          <Link to="/" className="link-header">
            <h2 >Back to Home &#127750;</h2> 
          </Link>
        
      </header>
      <main className="payment-page d-flex justify-center dir-row border  gap-m">
        <div className="final-details-container d-flex dir-col gap-m border">
          <h2 className="pay-app-heading">Trip Details</h2>
          <div className="dates-and-guests d-flex dir-col gap-m">
            <h3 className="pay-components">Your Trip</h3>
            <div>
              <p className="pay-app-heading-2">Dates</p>
              <div className="pay-components">
                {dateCheckIn.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {dateCheckOut.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </div>
            </div>
            <div>
              <p className="pay-app-heading-2">Guests</p>
              <div className="pay-components" >{guests} Guests</div>
            </div>
          </div>
          <div className="d-flex dir-col gap-s">
            <h3 className="pay-app-heading">Pay with</h3>
            <div className="tag">
            Your booking is protected by{" "}
            <strong >V TRAVEL</strong> 
          </div>
            <div className="pay-app d-flex align-center "><h5>Razorpay</h5> 
            <span class="material-symbols-outlined">
verified_user
</span></div>
          </div>
          
          <button
            className="confirm-button"
            // onClick={handleConfirmBookingClick}
          >
            Confirm Booking
          </button>
          
        </div>
        <div className="final-details d-flex dir-col gap-l">
          <div className="final-hotel d-flex gap-s align-center">
            <img className="image" src={image} alt={name} />
            <div className="d-flex dir-col">
              <div className="d-flex dir-col grow-shrink-basis">
                <div className="final-hotel-name">{name}</div>
                <span className="final-hotel-address" >
                  {address}, {state}
                </span>
              </div>
            </div>
          </div>
         
          <div className="price-detail-container">
            <div className="price-distribution d-flex dir-col">
              <h3 className="pay-app-heading">Price Details</h3>
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
      <Footer/>
    </Fragment>
  );
};
