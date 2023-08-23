import { Fragment } from "react"
import { Navbar,SingleHotelCard ,Footer,SearchByDate} from "../../components/index"
import { useDate} from "../../context/index";


export const SingleHotel =()=>{
  //for date search
  const {isSearchModalOpen,dateDispatch} =useDate();
    return(
        <Fragment>  
            <Navbar/>
            <SingleHotelCard/>
            <Footer/>
            {isSearchModalOpen && <SearchByDate/>}
        </Fragment>
    )
}