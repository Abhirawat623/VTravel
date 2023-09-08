import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  HotelCard,
  Categories,
  Footer,
  SearchByDate,
  Filter,
  Alert
} from "../../components/index";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCategory, useDate, useFilter,useAlert } from "../../context/index";
import {
  getHotelsByPrice,
  getHotelsByRoomsAndBeds,
  getHotelsByRatings,
  getHotelsByType,
} from "../../utils/index";

export const Home = () => {
  //for date search
  const { isSearchModalOpen } = useDate();
  const {
    isFilterModalOpen,
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    vTravelRating,
    propertyType,
  } = useFilter();
  //alert

  const {alert} = useAlert();
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
          `https://aware-foal-lingerie.cyclic.app/api/hotels?category=${hotelCategory}`
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
  const filteredHotelsByRatings = getHotelsByRatings(
    filteredHotelsByRoomsAndBeds,
    vTravelRating
  );
  //hotel type filters

  const filteredHotelsByType = getHotelsByType(
    filteredHotelsByRatings,
    propertyType
  );
  console.log(filteredHotelsByRatings);
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
              {filteredHotelsByType &&
                filteredHotelsByType.map((hotel) => (
                  <HotelCard key={hotel._id} items={hotel} />
                ))}
            </main>
          </InfiniteScroll>
        ) : (
          <></>
        )}
             {alert.open && <Alert />}
        <Footer />
      </div>
    </Fragment>
  );
};
