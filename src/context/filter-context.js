import { createContext,useContext,useReducer} from "react";
import { filterReducer } from "../reducer/index";

const initialValue = {
    isFilterModalOpen: false,
    priceRange:[300,2000],
    isCancellable:true,
    propertyType:"Any",
    noOfBeds: "Any",
    noOfBathrooms :"Any",
    noOfBedrooms: "Any",
    vTravelRating: 1,

}

const FilterContext = createContext(initialValue);

const FilterProvider =({children})=>{
 const [ {isFilterModalOpen,priceRange,isCancellable,propertyType,noOfBeds, noOfBedrooms, noOfBathrooms,vTravelRating},filterDispatch ] = useReducer( filterReducer,initialValue)
    return(
   <FilterContext.Provider value={{isFilterModalOpen,priceRange,isCancellable,propertyType,noOfBeds, noOfBedrooms, noOfBathrooms,vTravelRating,filterDispatch}}>
    {children}
   </FilterContext.Provider>
    );
}

const useFilter = ()=>useContext(FilterContext);

export { FilterProvider,useFilter};