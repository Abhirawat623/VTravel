import React from "react";
import DatePicker from "react-datepicker";
import { useDate } from "../../context/index";

import "react-datepicker/dist/react-datepicker.css";
//dont use {Date Picker}

export const DateSelector = ({ checkInType}) => {
  // const [currentDate, setCurrentDate]=useState( new Date());
  const { dateCheckIn, dateCheckOut, dateDispatch } = useDate();

  const handleDateCHange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };

  console.log({dateCheckIn, dateCheckOut})

  return (
    <DatePicker
      onChange={(date) => handleDateCHange(date)}
      selected={checkInType === "in" ? dateCheckIn : dateCheckOut}
      dateFormat="dd/MM/yyyy"
      closeOnScroll={true}
      placeholderText=" Select Date"
      
    />
  );
};
