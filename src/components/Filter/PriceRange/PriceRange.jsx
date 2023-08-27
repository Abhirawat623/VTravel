import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../../context/index";
const minDifference = 500;

function valueText(value) {
  return `${value}`;
}

export const PriceRange = (newValue, activeThumb) => 
{
  const { priceRange, filterDispatch } = useFilter();
  //logic
  const handlePriceRangeChange = () => {
    if (!Array.isArray(newValue)) {
      return;
    } //if no array is in array

    if (activeThumb === 0) {
      filterDispatch({
        type: "MINIMUM_PRICE",
        payload: { newValue, priceRange, minDifference },
      });
    } else {
      filterDispatch({
        type: "MAXIMUM_PRICE",
        payload: { newValue, priceRange, minDifference },
      });
    }
  };
  return (
    <div className="filter-compnent-container">
      <span className="filter-label-name">Price Range</span>
      <Box>
        <Slider
          sx={{ color: "var(--accent-color)" }}
          getAriaLabel={() => "Minimum Difference"}
          getAriaValueText={valueText}
          value={priceRange}
          min={100}
          max={25000}
          valueLabelDisplay="on"
          disableSwap
          onChange={handlePriceRangeChange}
        />
      </Box>
    </div>
  );
};
