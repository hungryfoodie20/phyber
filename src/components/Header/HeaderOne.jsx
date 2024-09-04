// import { HeaderOne as header } from "@/data/header";
// import { useThemeContext } from "@/context/ThemeContext";
// // import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

// export default function HeaderOne() {
//   const { toggleMobileMenu } = useThemeContext();

//   return (
//     <header className="skillhub-header header__area overflow-hidden">
//       <div className="header__wrapper pt-4">
//         {/* <!-- Header logo  --> */}
//         <div className="header__logo">
//           <Link to="/">
//             <img className="px-2" src={header.logo1} alt="Logo" />
//             <img src={header.logo} alt="Logo" />
//           </Link>
//         </div>
//         {/* <!-- Header Button  --> */}
//         <div className="header__btn">
//           <Link className="btn-login" style={{borderBottom: "3px solid #007AFF"}} to="/">
//             Benefits
//           </Link>
//           <Link
//             className="btn-signUp btn-hover-shadow"
//             style={{ color: "#ffffff" }}
//             to="#contactus"
//             scroll={(el) =>
//               el.scrollIntoView({ behavior: "smooth", block: "start" })
//             }
//           >
//             Contact us
//           </Link>
//         </div>
//       </div>
//       {/* <!-- Header Search  --> */}
//     </header>
//   );
// }

// import { HeaderOne as header } from "@/data/header";
// import MenuOne from "@/components/Menu/MenuOne";

// import menus from "@/data/menu";
// import { useThemeContext } from "@/context/ThemeContext";
// // import SearchOne from "@/components/Search/SearchOne";
// import { Link } from "react-router-dom";

// export default function HeaderOne() {
//   const { toggleMobileMenu } = useThemeContext();
//   const data = {
//     classNames: {
//       header: "header__main",
//       menu: "",
//       item: "",
//     },
//     menus: menus,
//   };

//   return (
//     <header className="skillhub-header header__area">
//       <div className="header__wrapper">
//         {/* <!-- Header logo  --> */}
//         <div className="header__logo">
//           <Link to="/">
//             <img src={header.logo} alt="Logo" />
//           </Link>
//         </div>
//         {/* <!-- Header menu  --> */}
//         <MenuOne data={data} />
//         {/* <!-- Header social  --> */}
//         <div className="header__social">
//           {/* <SearchOne /> */}
//         </div>
//         {/* <!-- Offcanvas icon  --> */}
//         <div className="offcanvas-icon" onClick={toggleMobileMenu}>
//           <i className="ph ph-list"></i>
//           ppppp
//         </div>
//         {/* <!-- Header Button  --> */}
//         {/* <div className="header__btn">
//           <Link className="btn-login" to="#">
//             Login
//           </Link>
//           <Link className="btn-signUp btn-hover-shadow" to="#">
//             Sing up free
//           </Link>
//         </div> */}
//       </div>
//       {/* <!-- Header Search  --> */}
//     </header>
//   );
// }


// import React, { useState } from "react";
// import ComingSoonDemo from "@/assets/imgs/logo/logo2.png";
// import menus from "@/data/menu"; // Assuming the above menu array is in the same folder

// export default function HeaderOne() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={ComingSoonDemo} alt="Logo" />
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>
//         <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
//           {menus.map((menu, index) => (
//             <li key={index} className="nav-item">
//               <a href={menu.link} className="nav-link">
//                 {menu.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// // export default Navbar;

// import React, { useState, useEffect } from "react";
// import ComingSoonDemo from "@/assets/imgs/logo/logo3.png";
// import menus from "@/data/menu";

// export default function HeaderOne() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#categories"); // Default active link

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle scroll or hash change
//   useEffect(() => {
//     const handleScrollOrHashChange = () => {
//       const currentHash = window.location.hash || "#categories"; // Default to #categories if no hash
//       setActiveLink(currentHash);
//     };

//     window.addEventListener("hashchange", handleScrollOrHashChange);
//     window.addEventListener("scroll", handleScrollOrHashChange);

//     return () => {
//       window.removeEventListener("hashchange", handleScrollOrHashChange);
//       window.removeEventListener("scroll", handleScrollOrHashChange);
//     };
//   }, []);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={ComingSoonDemo} alt="Logo" />
//         </div>
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
//         </div>
//         <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
//           {menus.map((menu, index) => (
//             <li key={index} className="nav-item">
//               <a
//                 href={menu.link}
//                 className={`nav-link ${activeLink === menu.link ? "active" : ""}`}
//               >
//                 {menu.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import ComingSoonDemo from "@/assets/imgs/logo/logo3.png";
import menus from "@/data/menu"; // Assuming the above menu array is in the same folder

export default function HeaderOne() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#categories"); // Default active link
  const sectionsRef = useRef({});

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = menus.map((menu) => document.querySelector(menu.link));

    const observer = new IntersectionObserver(
      (entries) => {
        let activeSection = "#categories"; // Fallback to Categories
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

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="logo">
          <img src={ComingSoonDemo} alt="Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menus.map((menu, index) => (
            <li key={index} className="nav-item">
              <a
                href={menu.link}
                className={`nav-link ${activeLink === menu.link ? "active" : ""}`}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
