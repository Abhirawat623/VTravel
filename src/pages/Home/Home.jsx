import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar,HotelCard } from "../../components/index";

export const Home=()=>{

const [hotel,setHotel]= useState([]);

 useEffect(()=>{
  (async ()=>{
    try{
        const {data}= await axios.get('https://sore-blue-duckling-garb.cyclic.cloud/api/hotels');
        setHotel(data);
    
    }
    catch(err){
        console.log(err)
    }
  }
  )()
 },[])



    return(
        <Fragment>
            <Navbar/>
            <div className="hotelcard-container">

            <HotelCard key={hotel._id} items={hotel}/>
            </div>
            
        </Fragment>
    )
}