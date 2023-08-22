import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//dont use {Date Picker}

export const DateSelector =()=>{

    return(
        <DatePicker
         dateFormat="dd/MM//yyyy"
         placeholder="Check In"
         closeOnScroll={true}
        
        />
    )
}