import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar, HotelCard } from "../../components/index";
import InfiniteScroll from "react-infinite-scroll-component";

export const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(12);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://sore-blue-duckling-garb.cyclic.cloud/api/hotels"
        );
        setTestData(data);
        setHotels(data ? data.slice(0, 12) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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

  return (
    <Fragment>
      <Navbar />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreHotels}
          hasMore={hasMore}
          loader={
            hotels.length > 0 && (
              <span class="loader">
               Loading....
              </span>
            )
          }
          endMessage={<p className="last-message">You have reached to the Last section &#x1F304; &#9749; </p>}
        >
          <main className="hotelcard-container gap-m">
            {hotels &&
              hotels.map((hotel) => (
                <HotelCard key={hotel._id} items={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
    </Fragment>
  );
};
