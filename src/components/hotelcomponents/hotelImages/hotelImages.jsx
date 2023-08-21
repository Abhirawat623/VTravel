export const HotelImages = ({ items }) => {
  const { image, imageArr } = items;
  return (
    <div className="hotelImage-container ">
      <div className="hotel-image-primary">
        <img className="primary-image" src={image} alt="image" />
      </div>
      <div className="grid-images">
      {imageArr &&
        imageArr.map((image) => (
         
            <img className="secondary-image" src={image} key={image} alt="No Image To Load" />
         
        ))}
         </div>
    </div>
  );
};
