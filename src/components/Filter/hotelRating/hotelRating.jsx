import { useFilter } from "../../../context/index";

const ratings = ["1", "2", "3", "4", "5"];

export const HotelRating = () => {
  const { filterDispatch } = useFilter();

  const handleRatingsCLick = (ratings) => {
    filterDispatch({
      type: "RATING",
      payload: ratings,
    });
  };

  return (
    <div className="filter-component-container">
      <span className="filter-rating-container">Ratings</span>
      <span className="filter-rating-boxes">
        {ratings.map((rating) => (
          <span
          className="filter-rating-box selected"
          key="rating"
            onClick={() => handleRatingsCLick(rating)}
          >
            {rating}
          </span>
        ))}
      </span>
    </div>
  );
};
