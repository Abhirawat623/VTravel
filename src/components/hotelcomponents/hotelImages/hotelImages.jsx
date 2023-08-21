

export const HotelImages = ({singleHotel})=>{

  const {image}= singleHotel;
    return(
        <div className="hotel-image-container">
      
        <div className="hotel-image-primary">
            <img className="primary-image" 
            src={image}
            alt="image"    />
        </div>


        </div>
    )
}