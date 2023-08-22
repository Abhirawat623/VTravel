import { Fragment } from "react"
import { Navbar,SingleHotelCard ,Footer} from "../../components/index"



export const SingleHotel =()=>{
    return(
        <Fragment>
            <Navbar/>
            <SingleHotelCard/>
            <Footer/>
        </Fragment>
    )
}