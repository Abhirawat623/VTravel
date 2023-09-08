import { DateSelector } from "../Dateselector/Dateselector";
import { useEffect, useState } from "react";
import { useDate, useCategory } from "../../context/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const SearchByDate = () => {
  //navigate
  const navigate = useNavigate();
  const { dateDispatch, location, guests, islocationListOpen } = useDate();
  const { hotelCategory } = useCategory();
  //for link
  const [hotels, setHotels] = useState([]);
   useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://aware-foal-lingerie.cyclic.app/api/hotels?category=${hotelCategory}`
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

  const locationList = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(location.toLowerCase()) ||
      city.toLowerCase().includes(location.toLowerCase()) ||
      state.toLowerCase().includes(location.toLowerCase()) ||
      country.toLowerCase().includes(location.toLowerCase())
  );

  //location click
  const handlelocationResultClick = (address) => {
    dateDispatch({
      type: "LOCATION",
      payload: address,
    });
    dateDispatch({
      type: "OPEN_SEARCH_MODAL"
    })
  };

  //focus of search-date bar
  const handleLocationListOpen = () => {
    dateDispatch({
      type: "OPEN_LOCATION_LIST",
      payload: islocationListOpen,
    });
  };
 
  //search button
  const handlesearchButton=()=>{
    dateDispatch({
      type: "CLOSE_LOCATION_LIST",
      payload:islocationListOpen
    })
    navigate(`/hotels/${location}`)
  }
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
            value={location}
            onFocus={handleLocationListOpen}
            onClick={handleLocationListOpen}
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
            type="number"
           min={1}
           max={4}
          />
        </div>
        <div
          className="close-searcher-date cursor-pointer"
          onClick={handleSearchClose}
        >
          X
        </div>
        {islocationListOpen && (
          <div className="location-list-container">
            {locationList &&
              locationList.map(({ address, city }) => (
                <p
                  className="location-elements cursor-pointer "
                  onClick={() => handlelocationResultClick(address)}
                >
                  {address}, {city}
                </p>
              ))}
          </div>
        )}
        <span className="material-icons-outlined cursor-pointer" onClick={handlesearchButton}>search</span>
      </div>
    </div>
  );
};
