import "./Header.css";
import { Link } from "react-router-dom";
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-cybrog">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="/#">
                  Browse
                </a>
              </NavItem>
              <NavItemDropDown>
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/#">
                      Fortinte
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">
                      Call of Duty
                    </a>
                  </li>
                </ul>
              </NavItemDropDown>
              <NavItem>
                <a className="nav-link" href="/#">
                  Streams
                </a>
              </NavItem>
              <NavItem>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
