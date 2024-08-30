import React, { useState, useEffect, useRef } from "react";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);
  const menuBtnIconRef = useRef(null);

  const handleMenuBtnClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleNavLinksClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const menuBtnIcon = menuBtnIconRef.current;
    const navLinks = navLinksRef.current;

    if (isMenuOpen) {
      navLinks.classList.add("open");
      menuBtnIcon.setAttribute("class", "ri-close-line");
    } else {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  }, [isMenuOpen]);

  return (
    <nav>
      <div className="nav__bar">
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">Rofiqq.</a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" ref={menuBtnRef} onClick={handleMenuBtnClick}>
            <i className="ri-menu-line" ref={menuBtnIconRef}></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links" ref={navLinksRef} onClick={handleNavLinksClick}>
          <li><a href="#home">Home</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#experience">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
