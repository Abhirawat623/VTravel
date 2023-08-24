import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer/date-reducer";

const initialValue = {
  isSearchModalOpen: false,
  dateCheckIn: null,
  dateCheckOut: null,
  location:"",
  guests:"",
  islocationListOpen:false
};
const DateContext = createContext(initialValue);

const DateProvider = ({ children }) => {
  const [{ isSearchModalOpen,location,guests, dateCheckIn, dateCheckOut,islocationListOpen }, dateDispatch] =
    useReducer(dateReducer, initialValue);
  return (
    <DateContext.Provider
      value={{ isSearchModalOpen, dateCheckIn, dateCheckOut,location,guests,islocationListOpen,dateDispatch }}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);

export { useDate, DateProvider };
