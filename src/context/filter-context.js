import { createContext,useContext,useReducer} from "react";

const initialValue = {
    bed:'any'
}

const FilterContext = createContext(initialValue);

const FilterProvider =({children})=>{

    return(
   <FilterContext.Provider value={{bed}}>
    {children}
   </FilterContext.Provider>
    );
}

const useFilter = ()=>useContext(FilterContext);

export { FilterProvider,useFilter};