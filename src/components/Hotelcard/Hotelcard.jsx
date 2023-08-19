export const HotelCard = () => {
  return (
    <div className="hotel-container d-flex dir-col">
      <div className="hotel-image-container">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-23795589/original/98aec13a-0a53-48e9-86a0-844ac55653a3.jpeg?im_w=720"
          alt="hotel-image"
          className="hotel-image"
        />
      </div>
      <div className="hotel-description">
        <div className="d-flex dir-col ">
          <h4>Nainital,Uttarakhand</h4>
          <h5>benty hotel</h5>
        </div>
      </div>
      <div className="hotel-footer d-flex  space-between">
        <span>Rs.3000/Night</span>
        <div className="star">
        <span class="material-icons-outlined">star</span>
          <span>
             4.4 star
          </span>
        </div>
      </div>
    </div>
  );
};
