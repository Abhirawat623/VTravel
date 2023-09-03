import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "@itseasy21/react-elastic-carousel";
import { useCategory,useFilter} from "../../context/index";
export const Categories = () => {
  //filter
  const {isFilterModalOpen, filterDispatch} =useFilter();
  const [categories, setCategories] = useState([]);
  //for categories
  const { hotelCategory, setHotelCategory } = useCategory();
  //   const [numberOfCategories, setNumberOfCategories] = useState(0);

  //   const handleLeftButton = () => {
  //     setNumberOfCategories((prev) => prev - 8);
  //   };

  //   const handleRightButton = () => {
  //     setNumberOfCategories((prev) => prev + 8);
  //   };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://aware-foal-lingerie.cyclic.app/api/categories"
        );
        // const categoriesToShow = data.slice(
        //   numberOfCategories + 8 > data.length
        //     ? data.length - 8
        //     : numberOfCategories,
        //   numberOfCategories > data.length
        //     ? data.length
        //     : numberOfCategories + 8
        // );
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    setHotelCategory(category);
  };

  const handleFilterClick = () => {
    filterDispatch({
      type:"IS_FILTER_OPEN",
      payload: isFilterModalOpen
    })
  };

  return (
    <div className="categories-container ">
      {/* { numberOfCategories >= 8 &&
    <span className="material-icons-outlined cursor-pointer" onClick={handleLeftButton}>
        arrow_back_ios_new
      </span>
} */}
      <Carousel
        className="carousel"
        itemsToShow={6}
        itemPadding={[5, 10]}
        itemsToScroll={5}
        pagination={false}
        autoPlaySpeed={2500}
      >
        {categories &&
          categories.map(({ _id, category }) => (
            <button
              className={`${
                category === hotelCategory ? "selected-category" : ""
              } categories`}
              key={_id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
      </Carousel>
      <button className="filter-button" onClick={handleFilterClick}>
        <span class="material-icons-outlined" >
          filter_alt
        </span>  <span> Filter</span> 
      </button>
      {/*     
{ numberOfCategories< categories.length 
&&a
<span className="material-icons-outlined cursor-pointer" onClick={handleRightButton}>
        arrow_forward_ios
      </span>
} */}
    </div>
  );
};
