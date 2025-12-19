import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Menu, X, Search } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScrolled(isScrolled);
      if (isScrolled) setMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      {/* DESKTOP NAV */}
      <header className={`navigation-container ${scrolled ? "hide" : ""}`}>
        <div className="big-navbar">
          <div className="subscribe">
            <AiOutlineMail /> <p> Subscribe</p>
          </div>

          <div className="cart-toggle-menu">
            <BsCart4 className="icon" />
            <span className="icon toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </span>
          </div>
        </div>

        <nav className="navbar navbar-top">
          <div className={`nav-links`}>
            {/* <NavLink to="/" className={navLinkClass}>Home</NavLink> */}
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/news" className={navLinkClass}>News</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* CENTER LOGO */}
          <NavLink to="/" className="logo-wrapper">
            <img
              src="https://res.cloudinary.com/divio4grm/image/upload/v1766143698/WhatsApp_Image_2025-12-19_at_12.26.57-removebg-preview_w6d9fy.png"
              alt="Logo"
            />
          </NavLink>

          {/* SEARCH BAR */}
          <div className="nav-search">
            <Search className="search-icon" />
            <input type="text" placeholder="Search players, news..." />
          </div>
        </nav>
      </header>

      {/* SCROLL NAVBAR */}
      <nav className={`navbar navbar-scroll ${scrolled ? "show" : ""}`}>
        <NavLink className="navbar-scroll-logo">

         <img
            src="https://res.cloudinary.com/divio4grm/image/upload/v1766148212/WhatsApp_Image_2025-12-19_at_13.42.30-removebg-preview_g2llg4.png"
            alt="Logo"
            className="mobile-logo"
            />
            </NavLink>
        <div className="scroll-nav-links">
          {/* <NavLink to="/" className={navLinkClass}>Home</NavLink> */}
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
          <NavLink to="/news" className={navLinkClass}>News</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
        <div className="nav-search small">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="mobile-navbar">
       

        <NavLink to="/" className="mobile-center">
          <img
            src="https://res.cloudinary.com/divio4grm/image/upload/v1766148212/WhatsApp_Image_2025-12-19_at_13.42.30-removebg-preview_g2llg4.png"
            alt="Logo"
            className="mobile-logo"
          />
        </NavLink>

        <div className="mobile-right">
             <div className="mobile-left">
          <BsCart4 className="icon" />
        </div>
        
          <span className="icon toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </span>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {/* <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink> */}
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>Shop</NavLink>
          <NavLink to="/news" className={navLinkClass} onClick={() => setMenuOpen(false)}>News</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

