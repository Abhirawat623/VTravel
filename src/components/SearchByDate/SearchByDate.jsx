import { DateSelector } from "../Dateselector/Dateselector";
import { useDate } from "../../context/index";
export const SearchByDate = () => {
  const {dateDispatch} =useDate();
    const handleSearchClose =()=>{
        dateDispatch({
         type:"Open_search_modal"
        })
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
            />
          </div>
          {/* check in-out */}
          <div className="searcher-date-option ">
            <label className="label cursor-pointer">Check In</label>
            <DateSelector  checkInType="in"/>
          </div>

          <div className="searcher-date-option ">
            <label className="label cursor-pointer">Check Out</label>
            <DateSelector  checkInType="out" />
          </div>
          {/* guests */}
          <div className="searcher-date-option cursor-pointer">
            <label className="label cursor-pointer">Guests</label>
            <input
              className="input search-date-input cursor-pointer"
              placeholder="Add guests"
            />
          </div>
          <div className="close-searcher-date cursor-pointer" onClick={handleSearchClose}>X</div>
          <span className="material-icons-outlined cursor-pointer">search</span>
        </div>
      
      </div>
  );
};
