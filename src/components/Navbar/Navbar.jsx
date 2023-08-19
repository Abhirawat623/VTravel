export const Navbar = () => {
  return (
    <nav className="navbar  ">
      <div className="container-fluid d-flex dir-row gap-l">
        <img
          className="nav-logo cursor-pointer"
          src="../assets/nav-logo.png"
          alt="navlogo"
          href="#"

        />

        <div className="form-container d-flex dir-column align-center gap-l cursor-pointer">
          <span className="form-icons">Where To Book</span>
          <span className="form-icons">When To Visit</span>
          <span className="form-icons">Add Guests</span>
          <span className="material-icons-outlined searcher">search</span>
        </div>

        <ul className="navbar-items  d-flex dir-row ">
          <li className="nav-icon">
            <span class="material-icons-outlined cursor-pointer">person</span>
          </li>
          <li className="nav-icon">
            <span class="material-icons-outlined cursor-pointer ">drag_indicator</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};
