import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  HotelCard,
  Categories,
  Footer,
  SearchByDate,
  Filter,
} from "../../components/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCategory, useDate, useFilter } from "../../context/index";
import { getHotelsByPrice, getHotelsByRoomsAndBeds,getHotelsByRatings } from "../../utils/index";

export const Home = () => {
  //for date search
  const { isSearchModalOpen } = useDate();
  const {
    isFilterModalOpen,
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    vTravelRating
  } = useFilter();

  //for Infinite Scrolls
  const [hotels, setHotels] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(12);
  const [testData, setTestData] = useState([]);

  //for categories
  const { hotelCategory } = useCategory();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://real-teal-basket-clam-wear.cyclic.cloud/api/hotels?category=${hotelCategory}`
        );
        setTestData(data);
        console.log(hotels);
        setHotels(data ? data.slice(0, 12) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);
  const fetchMoreHotels = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 12))
        );
        setCurrentIndex((prev) => prev + 12);
      } else {
        setHotels([]);
      }
    }, 700);
  };
 //price filter
  const filteredHotelByPrice = getHotelsByPrice(hotels, priceRange);
  //rooms and beds filter
  const filteredHotelsByRoomsAndBeds = getHotelsByRoomsAndBeds(
    filteredHotelByPrice,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  );
  //ratings filter
   const filteredHotelsByRatings = getHotelsByRatings( filteredHotelsByRoomsAndBeds, vTravelRating);
  return (
    <Fragment>
      <div className="bg-all">
        <Navbar />
        {isSearchModalOpen && <SearchByDate />}
        <Categories />
        {isFilterModalOpen && <Filter />}
        {hotels && hotels.length > 0 ? (
          <InfiniteScroll
            dataLength={hotels.length}
            next={fetchMoreHotels}
            hasMore={hasMore}
            loader={
              hotels.length > 10 &&
              filteredHotelsByRatings.length > 10 && (
                <span className="loader">Loading....</span>
              )
            }
            endMessage={
              <p className="last-message">
                You have reached to the Last section &#x1F304; &#9749;
              </p>
            }
          >
            <main className="hotelcard-container">
              {filteredHotelsByRatings &&
                filteredHotelsByRatings.map((hotel) => (
                  <HotelCard key={hotel._id} items={hotel} />
                ))}
            </main>
          </InfiniteScroll>
        ) : (
          <></>
        )}

        <Footer />
      </div>
    </Fragment>
  );
};
