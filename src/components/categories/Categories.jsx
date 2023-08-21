import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from '@itseasy21/react-elastic-carousel'
import { useCategory } from "../../context/index";
export const Categories = () => {
    const [categories, setCategories] = useState([]);
    //for categories
    const { hotelCategory,setHotelCategory} =useCategory();
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
                    "https://real-teal-basket-clam-wear.cyclic.cloud/api/categories"
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
                console.log(err)
            }
        })();
    }, []);

  const handleCategoryClick=(category)=>{
  setHotelCategory(category);
  }

console.log(hotelCategory)
    return (
        <div className="categories-container ">


            {/* { numberOfCategories >= 8 &&
    <span className="material-icons-outlined cursor-pointer" onClick={handleLeftButton}>
        arrow_back_ios_new
      </span>
} */}
            <Carousel className="carousel" itemsToShow={8} itemPadding={[10, 50]} itemsToScroll={8} pagination={false} autoPlaySpeed={2500}>
                {categories &&
                    categories.map(({ _id,category }) => (
                        <button className="categories" key={_id} onClick={()=>handleCategoryClick(category)}>{category}</button>
                    ))}
            </Carousel>
            {/*     
{ numberOfCategories< categories.length 
&&
<span className="material-icons-outlined cursor-pointer" onClick={handleRightButton}>
        arrow_forward_ios
      </span>
} */}

        </div>
    );
};
