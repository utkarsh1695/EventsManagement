import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import routesConfig from "../../routes/config";
import style from "./index.module.scss";

const Header = () => {
  const auth = useSelector((state) => state?.auth, shallowEqual);

  const token = auth?.token;
  return (
    <nav className={style.container}>
      <h3>Events Made Easy!</h3>
      <ul>
        {!token && (
          <li>
            <NavLink activeClassName={style.active} to={routesConfig.AUTH}>
              Sign In/Up
            </NavLink>
          </li>
        )}
        <li>
          <NavLink activeClassName={style.active} to={routesConfig.EVENTS}>
            Events
          </NavLink>
        </li>
        {token && (
          <>
            <li>
              <NavLink
                activeClassName={style.active}
                to={routesConfig.BOOKINGS}
              >
                Bookings
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={style.active} to={routesConfig.AUTH}>
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
