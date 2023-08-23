import { Fragment } from "react"
import { Navbar,SingleHotelCard ,Footer,SearchByDate} from "../../components/index"
import { useDate } from "../../context/index"



export const SingleHotel =()=>{
    const isSearchModalOpen= useDate();
    return(
        <Fragment>
               {isSearchModalOpen && <SearchByDate/>}
            <Navbar/>
            <SingleHotelCard/>
            <Footer/>
        </Fragment>
    )
}