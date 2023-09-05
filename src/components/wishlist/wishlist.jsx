import { Fragment } from "react";
import { Navbar,Footer,HotelCard} from "../index";
import { useWishlist } from "../../context/index";
import '../wishlist/wishlist.css'
export const Wishlist =()=>{

const {wishlist}=useWishlist();


    return(
        <Fragment>
          <Navbar/>
   {wishlist.length>1 ? ( <main className="hotelcard-container">
              {wishlist&&
                wishlist.map((hotel) => (
                  <HotelCard key={hotel._id} items={hotel} />
                ))}
            </main>):(
              <div className="nothing-wishlist">
                <h2>Nothing is added in Wishlist &#x1F610; &#x1F610; &#x1F610; </h2>
              </div>
            )}
         



          <Footer/>
        </Fragment>
    )
}