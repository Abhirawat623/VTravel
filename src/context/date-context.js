import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../components/reducer/date-reducer";

const initialValue = {
  isSearchModalOpen: false,
  dateCheckIn: null,
  dateCheckOut: null,
};
const DateContext = createContext(initialValue);

const DateProvider = ({ children }) => {
  const [{ isSearchModalOpen, dateCheckIn, dateCheckOut }, dateDispatch] =
    useReducer(dateReducer, initialValue);
  return (
    <DateContext.Provider
      value={{ isSearchModalOpen, dateCheckIn, dateCheckOut, dateDispatch }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
