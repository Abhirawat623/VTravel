export const HotelCard = ({items}) => {
   console.log(items)
    const { name, image, address, state, rating, price } = items;



  return (
     items.map(value=> {
        return(
    <div className="hotel-container d-flex dir-col">
      <div className="hotel-image-container">
        <img
          src={value.image}
          alt={value.name}
          className="hotel-image"
        />
      </div>
      <div className="hotel-description">
        <div className="d-flex dir-col ">
          <h4>{value.address},{value.state}</h4>
          <h5>{value.name}</h5>
        </div>
      </div>
      <div className="hotel-footer d-flex  space-between">
        <span>Rs.{value.price}/Night</span>
        <div className="star">
        <span className="material-icons-outlined">star</span>
          <span>
             {value.rating}
          </span>
        </div>
      </div>
    </div>)})
  );
};
