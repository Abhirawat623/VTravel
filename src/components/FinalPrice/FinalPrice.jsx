import { useDate } from "../../context";
import { DateSelector } from "../index";
import { useNavigate } from "react-router-dom";
export const FinalPrice = ({ items }) => {
  const { price, rating } = items;
  const {dateCheckIn,dateCheckOut}=useDate()
 console.log(Number(dateCheckOut-dateCheckIn));
  return (
    <div className="final-price-container">
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
          <DateSelector checkInType="in"  />
        </div>
        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Check Out</label>
          <DateSelector checkInType="out" />
        </div>
      </div>
    </div>
  );
};
