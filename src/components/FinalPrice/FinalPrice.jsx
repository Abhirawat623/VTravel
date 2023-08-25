import { useDate } from "../../context";
import { DateSelector } from "../Dateselector/Dateselector";
import { useNavigate } from "react-router-dom";
export const FinalPrice =({items})=>{
    const { price}= items;
    return(
        <div className="final-price-container">
         <div className="final-price-rate-container">{price}</div>
        </div>
    )
}