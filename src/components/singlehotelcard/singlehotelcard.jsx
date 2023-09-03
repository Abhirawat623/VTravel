import { useParams } from "react-router-dom";
import { HotelImages, HotelDescription } from "../hotelcomponents/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { FinalPrice } from "../index";

export const SingleHotelCard = () => {
  const { id } = useParams();

  //for singleHotteldata

  const [singleHotel, setSingleHotel] = useState({});

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

  const {
    name,
    address,
    rating,
    city,
    country,
    state,
    hostName,
    hostJoinedOn,
  } = singleHotel;

  return (
    <>
      <div className="single-hotel-components">
        <div className="single-hotel-header">
          <h2 className="single-hotel-name">{name}</h2>
          <div className="rate-address text-l">
            <div className="single-hotel-star d-flex dir-row align-center">
              <span className="material-icons-outlined">star</span>
              <span className="single-hotel-star-rating">{rating}</span>
            </div>
            <div className="single-hotel-address">
              {address}, {city}, {state}, {country}
            </div>
          </div>
        </div>
        <div>
          <HotelImages items={singleHotel} />
        </div>
        <div className="host-details ">
          <h4 className="host-name d-flex dir-row align-center gap-xs">
            Host:
            <span className="material-symbols-outlined">new_releases</span>{" "}
            {hostName}
          </h4>
          <h5 className="joined-on">
            Joined on <span className="joined-date">{hostJoinedOn}</span>
          </h5>
        </div>
      </div>
      <div className="single-hotel-mid-section">
        <div>
          <HotelDescription items={singleHotel} />
        </div>
        <div>
          <FinalPrice items={singleHotel} />
        </div>
      </div>
    </>
  );
};
