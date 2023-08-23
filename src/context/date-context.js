import { createContext,useContext,useReducer} from "react";
import{dateReducer} from '../components/reducer/date-reducer';

const initialValue={
    isSearchModalOpen: false
}
const DateContext = createContext(initialValue);

const DateProvider=({children})=>{

    const[{isSearchModalOpen},dateDispatch] =useReducer(dateReducer,initialValue);
    return(
        <DateContext.Provider value={{isSearchModalOpen,dateDispatch}}>
            {children}
        </DateContext.Provider>
    )
}

const useDate =()=> useContext(DateContext);

export{useDate,DateProvider}