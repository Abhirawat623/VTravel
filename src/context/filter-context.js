import { createContext,useContext,useReducer} from "react";
import { filterReducer } from "../reducer/index";

const initialValue = {
    isFilterModalOpen: false,
}

const FilterContext = createContext(initialValue);

const FilterProvider =({children})=>{
 const [ {isFilterModalOpen},filterDispatch ] = useReducer( filterReducer,initialValue)
    return(
   <FilterContext.Provider value={{isFilterModalOpen,filterDispatch}}>
    {children}
   </FilterContext.Provider>
    );
}

const useFilter = ()=>useContext(FilterContext);

export { FilterProvider,useFilter};