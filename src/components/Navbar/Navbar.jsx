import { Link } from "react-router-dom";
import { useDate } from "../../context/index";
export const Navbar = () => {
  //date dispatch
const {dateDispatch} =useDate();

  const handleSearchClicked = () => {
   dateDispatch({
    type:"OPEN_SEARCH_MODAL"
   })
  };
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid d-flex dir-row gap-l">
          <Link to="/">
            <img
              className="nav-logo cursor-pointer"
              src={"https://i.ibb.co/2j4tDdc/nav-logo-removebg-preview.png"}
              alt="navlogo"
            />
          </Link>

          <div
            className="form-container d-flex dir-column align-center gap-l cursor-pointer"
            onClick={handleSearchClicked} 
          >
            <span className="form-icons text-bold">Where To Book</span>
            <span className="form-icons text-bold">When To Visit</span>
            <span className="form-icons">Add Guests</span>
            <span className="material-icons-outlined searcher">search</span>
          </div>

          <Link className="navbar-items  d-flex dir-row ">
            <li className="nav-icon" to="/login">
              <span className="material-icons-outlined cursor-pointer">person</span>
            </li>
            <li className="nav-icon">
              <span className="material-icons-outlined cursor-pointer ">
                drag_indicator
              </span>
            </li>
          </Link>
        </div>
      </nav>
    
    </>
  );
};
