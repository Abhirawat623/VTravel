import { DateSelector } from "../Dateselector/Dateselector";
import { useEffect, useState } from "react";
import { useDate, useCategory } from "../../context/index";
import axios from "axios";
export const SearchByDate = () => {
  const { dateDispatch, location, guests } = useDate();
  const { hotelCategory } = useCategory();
  //for link
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://real-teal-basket-clam-wear.cyclic.cloud/api/hotels?category=${hotelCategory}`
        );

        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  //open modal
  const handleSearchClose = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };
  //location
  const handleLocationChange = (event) => {
    dateDispatch({
      type: "LOCATION",
      payload: event.target.value,
    });
  };
  //guests
  const handleGuestsChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };
  console.log("guetst", guests);

  const locationList = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(location.toLowerCase()) ||
      city.toLowerCase().includes(location.toLowerCase()) ||
      state.toLowerCase().includes(location.toLowerCase()) ||
      country.toLowerCase().includes(location.toLowerCase())
  );

  console.log(locationList);

  return (
    <div className="searcher-date-container">
      <div className="searcher-date-options">
        {/* location */}
        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Where</label>
          <input
            className="input search-date-input cursor-pointer"
            placeholder="Search Location "
            onChange={handleLocationChange}
          />
        </div>
        {/* check in-out */}
        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Check In</label>
          <DateSelector checkInType="in" />
        </div>

        <div className="searcher-date-option ">
          <label className="label cursor-pointer">Check Out</label>
          <DateSelector checkInType="out" />
        </div>
        {/* guests */}
        <div className="searcher-date-option cursor-pointer">
          <label className="label cursor-pointer">Guests</label>
          <input
            className="input search-date-input cursor-pointer"
            placeholder="Add guests"
            onChange={handleGuestsChange}
            value={guests}
          />
        </div>
        <div
          className="close-searcher-date cursor-pointer"
          onClick={handleSearchClose}
        >
          X
        </div>
        <div className="location-list-container">
      {locationList &&
        locationList.map(({ address, city }) => (
          <p
            className="location-elements cursor-pointer "
            // onClick={() => handleSearchResultClick(address)}
          >
            {address}, {city}
          </p>
         
        ))}
         </div>
        <span className="material-icons-outlined cursor-pointer">search</span>
      </div>
      
    </div>
  );
};
