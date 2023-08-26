import { useFilter } from "../../context/index"

export const Filter =()=>{
    const {isFilterModalOpen,filterDispatch}=useFilter();
    //close modal
   const handleFilterModalClose =()=>{
  filterDispatch({
    type:"IS_FILTER_OPEN",
    payload:isFilterModalOpen
  })
   }
    return(<>
        <div className="filter-container">
        <button className="filter-close-button" onClick={handleFilterModalClose}> X</button>
        </div>
        
    </>)
}