import { useFilter } from "../../../context/index";

const ratings = ["1", "2", "3", "4", "5"];

export const HotelRating = () => {
  const { filterDispatch, vTravelRating } = useFilter();

  const handleRatingsCLick = (rating) => {
    filterDispatch({
      type: "RATING",
      payload: rating,
    });
  };
  return (
    <div className="filter-component-container">
      <span className="filter-rating-container">Ratings</span>
      <span className="filter-rating-boxes ">
        {ratings.map((rating) => (
          <span
            className={`${
              vTravelRating.toString() === rating ? "selected" : ""
            } filter-rating-box `}
            key={rating}
            onClick={() => handleRatingsCLick(rating)}
          >
            {rating}
          </span>
        ))}
      </span>
    </div>
  );
};
