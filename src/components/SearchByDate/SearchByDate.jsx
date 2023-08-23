import { DateSelector } from "../Dateselector/Dateselector";
import { useDate } from "../../context/index";
export const SearchByDate = () => {

    const handleSearchClose =()=>{
        dateDispatch({
         type:"Open_search_modal"
        })
         }
const {dateDispatch} =useDate();
  
  return (
    <div className="d-flex dir-col justify-center">
      <div className="searcher-date-container">
        <div className="searcher-date-options">
          {/* location */}
          <div className="searcher-date-option ">
            <label className="label cursor-pointer">Where</label>
            <input
              className="input search-date-input"
              placeholder="Search Location"
            />
          </div>
          {/* check in-out */}
          <div className="searcher-date-option ">
            <label className="label cursor-pointer">Check In</label>
            <DateSelector />
          </div>

          <div className="searcher-date-option ">
            <label className="label cursor-pointer">Check Out</label>
            <DateSelector />
          </div>
          {/* guests */}
          <div className="searcher-date-option cursor-pointer">
            <label className="label cursor-pointer">Guests</label>
            <input
              className="input search-date-input"
              placeholder="Add guests"
            />
          </div>
          <span className="material-icons-outlined cursor-pointer">search</span>
        </div>
      </div>
      <div className="close-searcher-date cursor-pointer" onClick={handleSearchClose}>X</div>
    </div>
  );
};
