import { createContext,useContext,useReducer} from "react";
import { filterReducer } from "../reducer/index";

const initialValue = {
    isFilterModalOpen: false,
    priceRange:[300,2000],
    isCancellable:true,
    hotelType:"Any",
    numberOfBeds: "Any",
    numberOfBathrooms :"Any",
    numberOfBedrooms: "Any"
   


}

const FilterContext = createContext(initialValue);

const FilterProvider =({children})=>{
 const [ {isFilterModalOpen,priceRange,isCancellable,hotelType,numberOfBeds, numberOfBedrooms, numberOfBathrooms},filterDispatch ] = useReducer( filterReducer,initialValue)
    return(
   <FilterContext.Provider value={{isFilterModalOpen,priceRange,isCancellable,hotelType,filterDispatch,numberOfBeds, numberOfBedrooms, numberOfBathrooms}}>
    {children}
   </FilterContext.Provider>
    );
}

const useFilter = ()=>useContext(FilterContext);

export { FilterProvider,useFilter};