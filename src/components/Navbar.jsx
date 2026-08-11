import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const NavList = ({ variant, active, onSelect }) => {
  const isDesktop = variant === "desktop";
  const listClass = isDesktop
    ? "list-none hidden sm:flex flex-row gap-10"
    : "list-none flex justify-end items-start flex-col gap-4";
  const itemBase = isDesktop
    ? "hover:text-primary text-[18px] font-medium cursor-pointer transition-colors"
    : "font-poppins font-medium cursor-pointer text-[16px]";
  const activeColor = "text-primary";
  const inactiveColor = "text-secondary";

  return (
    <ul className={listClass}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? activeColor : inactiveColor
          } ${itemBase}`}
          onClick={() => onSelect(link.title)}
        >
          <a href={`${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 sticky top-0 z-20 bg-ground border-b border-gray-200`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-primary text-[18px] font-bold cursor-pointer flex">
            Chieri Abe &nbsp;
            <span className="sm:block hidden text-secondary font-semibold">
              | Portfolio
            </span>
          </p>
        </Link>
        <NavList variant="desktop" active={active} onSelect={setActive} />

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer brightness-0 opacity-70"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white border border-gray-200 shadow-xl absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-3xl`}
          >
            <NavList
              variant="mobile"
              active={active}
              onSelect={(title) => {
                setToggle(false);
                setActive(title);
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
