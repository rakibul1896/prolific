import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  to,
  activeClassName,
  inActiveClassName,
  className,
  ...rest
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const allClassName =
    className + (isActive ? ` ${activeClassName}` : ` ${inActiveClassName}`);
  return <Link to={to} className={allClassName} {...rest} />;
};

const NavBar = () => {
  return (
    <div className="flex justify-center  bg-gray-600 ">
      <div className="flex smp:flex-row w-11/12 2xl:w-350 text-center">
      <NavLink
        to="/"
        activeClassName="text-red-300"
        inActiveClassName="text-white"
        className="px-1.5 smp:px-3 py-4 text-sm smp:text-base"
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        activeClassName="text-red-300"
        inActiveClassName="text-white"
        className="px-1.5 smp:px-3 py-4 text-sm smp:text-base"
      >
        Search
      </NavLink>
      <NavLink
        to="/form"
        activeClassName="text-red-300"
        inActiveClassName="text-white"
        className="px-1.5 smp:px-3 py-4 text-sm smp:text-base"
      >
        My Form
      </NavLink>
      <NavLink
        to="/info"
        activeClassName="text-red-300"
        inActiveClassName="text-white"
        className="px-1.5 smp:px-3 py-4 text-sm smp:text-base"
      >
        Info
      </NavLink>
      <NavLink
        to="/bonus"
        activeClassName="text-red-300"
        inActiveClassName="text-white"
        className="px-1.5 smp:px-3 py-4 text-sm smp:text-base"
      >
        Bonus
      </NavLink>
    </div>
    </div>
  );
};

export default NavBar;
