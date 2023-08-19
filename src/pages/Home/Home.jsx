import { Fragment } from "react"
import { Navbar,HotelCard } from "../../components/index"

export const Home=()=>{


    return(
        <Fragment>
            <Navbar/>
            <div className="hotelcard-container">
            <HotelCard/>
            </div>
            
        </Fragment>
    )
}