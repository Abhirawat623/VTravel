import { useParams } from "react-router-dom";
import { HotelImages } from "../hotelcomponents/index";
import { useEffect, useState } from "react";
import axios from "axios";

export const SingleHotelCard = () => {
  const  {id} = useParams();

  //for singleHotteldata

  const [singleHotel, setSingleHotel] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://real-teal-basket-clam-wear.cyclic.cloud/api/hotels/${id}`
        );
        

        setSingleHotel(data);

        console.log(singleHotel)
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

const {name,address,rating}= singleHotel;



  return (
  <div
  className="single-hotel-components">

    <div className="single-hotel-header">
      <h2 className="single-hotel-name">{name}</h2>
      <div className="rate-address d-flex dir-row  text-l">
      <div className="single-hotel-star d-flex dir-row">
          <span className="material-icons-outlined">star</span>
          <span className="single-hotel-star-rating">{rating}</span>
        </div>
        <div className="single-hotel-address">{address}</div>
      </div>
    </div>
    <div><HotelImages items={singleHotel} /></div>
  
  </div>
  )
};
