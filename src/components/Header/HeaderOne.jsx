
import React, { useState, useEffect, useRef } from "react";
import ComingSoonDemo from "@/assets/imgs/logo/logo.svg";
import menus from "@/data/menu"; // Assuming the above menu array is in the same folder

export default function HeaderOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Default active link
  const menuRef = useRef(null); // Ref for the menu container

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = menus.map((menu) => document.querySelector(menu.link));

    const observer = new IntersectionObserver(
      (entries) => {
        let activeSection = ""; // Fallback to Categories
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = `#${entry.target.id}`;
          }
        });
        setActiveLink(activeSection);
      },
      { threshold: 0.6 } // Adjust threshold to mark section active when 60% in view
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    const targetElement = document.querySelector(link);

    if (targetElement) {
      // Get the top position of the target element relative to the document
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Calculate the scroll position with a 5rem (80px) offset
      const offsetPosition = elementPosition - 80; // Adjust 80px based on 5rem

      // Scroll to the calculated position smoothly
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the mobile menu
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container" style={{padding: "0px 5px"}}>
        <div className="navbar-container container" ref={menuRef}>
          <div className="logo">
            <a href="/">
              <img src={ComingSoonDemo} alt="Logo" />
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            {menus.map((menu, index) => (
              <li key={index} className="nav-item">
                <a
                  href={menu.link}
                  className={`nav-link ${
                    activeLink === menu.link ? "active" : ""
                  }`}
                  onClick={(e) => handleNavClick(e, menu.link)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
