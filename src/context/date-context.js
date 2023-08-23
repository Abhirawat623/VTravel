import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../components/reducer/date-reducer";

const initialValue = {
  isSearchModalOpen: false,
  dateCheckIn: null,
  dateCheckOut: null,
  location:"",
  guests:0
};
const DateContext = createContext(initialValue);

const DateProvider = ({ children }) => {
  const [{ isSearchModalOpen,location,guests, dateCheckIn, dateCheckOut }, dateDispatch] =
    useReducer(dateReducer, initialValue);
  return (
    <DateContext.Provider
      value={{ isSearchModalOpen, dateCheckIn, dateCheckOut,location,guests, dateDispatch }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
