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
        const data = await axios.get(
          `https://real-teal-basket-clam-wear.cyclic.cloud/api/hotels/${id}`
        );
        

        setSingleHotel(data);

        console.log(singleHotel)
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return <HotelImages singleHotel={singleHotel} />;
};
