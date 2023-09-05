import { Fragment, useEffect, useState } from "react";
import { useCategory, useDate } from "../../context/index";
import axios from "axios";
import { Navbar, Footer, HotelCard } from "../../components";
export const ResultPage = ({ items }) => {
  const { location } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://aware-foal-lingerie.cyclic.app/api/hotels?category=${hotelCategory}`
        );
        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [location, hotelCategory]);

  const filteredResultPage = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase().includes(location.toLowerCase()) ||
      city.toLowerCase().includes(location.toLowerCase()) ||
      state.toLowerCase().includes(location.toLowerCase())
  );
  return (
    <Fragment>
      <Navbar />
      <main className="hotelcard-container">
        {filteredResultPage ? (
          filteredResultPage.map((hotel) => (
            <HotelCard key={hotel._id} items={hotel} />
          ))
        ) : (
          <h3>No Results Found</h3>
        )}
      </main>
      <Footer />
    </Fragment>
  );
};
