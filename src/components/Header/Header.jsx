import React, { useRef, useState } from "react";
import { ComponentHeader } from "./StyleHeader";

//images
import Logo from "./img/logo.svg";
import Icon from "./img/icon-hamburger.svg";
import CloseIcon from "./img/icon-close.svg";

const Header = (props) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [menu, setMenu] = useState(false);
  const navbarRef = useRef(null);

  return (
    <ComponentHeader className="header">
      {/* Logo */}
      <a href="index.html" className="header__logo">
        <img src={Logo} alt="logo-easybank-landing-page-master" />
      </a>

      {/* menu-control */}
      <button
        className="header__menuControl"
        type="button"
        onClick={() => {
          setMenuIcon(!menuIcon);
          if (menu === false) {
            navbarRef.current.classList.remove("fadeOut");
            navbarRef.current.style.display = "block";
            navbarRef.current.classList.add("fadeIn");

            setMenu(true);
          } else {
            navbarRef.current.classList.remove("fadeIn");
            navbarRef.current.classList.add("fadeOut");

            setTimeout(() => {
              navbarRef.current.style.display = "none";
            }, 1000);

            setMenu(false);
          }
        }}
      >
        <img src={menuIcon ? CloseIcon : Icon} alt="icon-menu-control" />
      </button>

      {/* menu-navigation */}
      <nav className="header__nave" ref={navbarRef}>
        <ul>
          <li>
            <a href=" #">Home</a>
          </li>
          <li>
            <a href=" #">About</a>
          </li>
          <li>
            <a href=" #">Contact</a>
          </li>
          <li>
            <a href=" #">Blog</a>
          </li>
          <li>
            <a href=" #">Carees</a>
          </li>
        </ul>
      </nav>

      {/* button - request invite */}
      <button type="button" className="request-invite">
        Request invite
      </button>
    </ComponentHeader>
  );
};

export default Header;
