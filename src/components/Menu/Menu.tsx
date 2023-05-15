import { NavLink } from "react-router-dom";
import Authorized from "../auth/Authorized";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { logout } from "../../utils/handleJWT";
import { useContext } from "react";
import AuthenticationContext from "../auth/AuthenticationContext";
export default function Menu() {
  const { update, claims } = useContext(AuthenticationContext);
  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark"
      dir="rtl"
      data-bs-theme="dark"
    >
      <div className="container-fluid" dir="rtl">
        <NavLink to="/" className="navbar-brand" dir="rtl">
          פופקורן
        </NavLink>
        <div
          className="collapse navbar-collapse"
          dir="rtl"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <ul className="navbar-nav  mb-2 mb-lg-0" dir="rtl">
            <li className="nav-item" dir="rtl">
              <NavLink className="nav-link" to="/movies/filter" dir="rtl">
                חיפוש סרטים
              </NavLink>
            </li>
            <Authorized
              role="admin"
              authorized={
                <>
                  <li className="nav-item" dir="rtl">
                    <NavLink className="nav-link" to="/genres" dir="rtl">
                      ז'אנרים
                    </NavLink>
                  </li>

                  <li className="nav-item" dir="rtl">
                    <NavLink className="nav-link" to="/actors" dir="rtl">
                      שחקנים
                    </NavLink>
                  </li>
                  <li className="nav-item" dir="rtl">
                    <NavLink className="nav-link" to="/theaters" dir="rtl">
                      בתי קולנוע
                    </NavLink>
                  </li>
                  <li className="nav-item" dir="rtl">
                    <NavLink className="nav-link" to="/movies/create" dir="rtl">
                      צור סרט
                    </NavLink>
                  </li>
                  <li className="nav-item" dir="rtl">
                    <NavLink className="nav-link" to="/users" dir="rtl">
                      משתמשים
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
          <div className="d-flex">
            <Authorized
              authorized={
                <>
                  <span className="nav-link" style={{color:'white', marginLeft: "1rem"}}>היי {getUserEmail()} </span>
                  <Button
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                    className="nav-link btn btn-light"
                  >
                    התנתק
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <Link
                    to="/login"
                    className="nav-link btn btn-light"
                    style={{ marginLeft: "1rem" }}
                  >
                    היכנס
                  </Link>
                  <Link to="/register" className="nav-link btn btn-light">
                    הירשם
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
