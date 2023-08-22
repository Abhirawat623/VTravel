import{DateSelector} from '../Dateselector/Dateselector'
export const SearchByDate =()=>{
    return(

        <div className="searcher-date-container">

            <div className="searcher-date-options">
                {/* location */}
                <div className="searcher-date-option">
                <label className="label">Where</label>
                <input  className="input search-date-input"
                placeholder="Search Location"/>
                </div>
                {/* check in-out */}
                <div className="searcher-date-option">
                <label className="label">Check In</label>
                 <DateSelector/>
                </div>

                <div className="searcher-date-option">
                <label className="label">Check Out</label>
                <DateSelector/>
                </div>
                {/* guests */}
                <div className="searcher-date-option">
                <label className="label">Guests</label>
                <input  className="input search-date-input" placeholder='Add guests'/>
                </div>
              
                <span className="material-icons-outlined">search</span>
              
            </div>
        </div>
    )
}