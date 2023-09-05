import { Link } from "react-router-dom";
import { useDate,useAuth} from "../../context/index";
export const Navbar = () => {
  //date dispatch
  const { dateDispatch } = useDate();
  const {accessToken,authDispatch}= useAuth();

  const handleSearchClicked = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  const token = localStorage.getItem("token"); 
  const handleLogoutClick =()=>{
   
    authDispatch({
      type:"LOGOUT_CLEAR"
    })
  } 


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

          {accessToken ? (
            <Link className="navbar-items  d-flex dir-row" to="/login" onClick={handleLogoutClick}>
              <li className="nav-icon">
                <span className="material-icons-outlined cursor-pointer">
                sentiment_dissatisfied
                </span>
              </li>
              <li className="nav-icon">
                <span className="material-icons-outlined cursor-pointer ">
                  logout
                </span>
              </li>
            </Link>
          ) : (
            <Link className="navbar-items  d-flex dir-row" to="/login">
              <li className="nav-icon">
                <span className="material-icons-outlined cursor-pointer">
                sentiment_satisfied_alt
                </span>
              </li>
              <li className="nav-icon">
                <span className="material-icons-outlined cursor-pointer ">
                  login
                </span>
              </li>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
