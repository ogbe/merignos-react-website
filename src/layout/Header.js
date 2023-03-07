// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaTimes, FaBars } from "react-icons/fa";
// import logo from "../images/logo.svg";
// import Button from "../Button.js";

// import "./Header.css";

// export default function Header() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   function showButton() {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     }
//     setButton(true);
//   }

//   useEffect(function () {
//     showButton();
//   }, []);

//   function handleClick() {
//     setClick(!click);
//   }

//   function closeMobileMenu() {
//     setClick(false);
//   }

//   window.addEventListener("resize", showButton);

//   return (
//     <header>
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>
//       <div className={click ? "m" : ""}>
//       <div className="menu-icon" onClick={handleClick}>
//           {click ? <FaTimes /> : <FaBars />}
//         </div>

//       <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li onClick={closeMobileMenu}>
//             <Link to="/company">company</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/solutions">solutions</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/contact">contact</Link>
//           </li>
//         </ul>
//       </div>
//       {/* <div className="mobile"> */}
//         {/* <div className="menu-icon" onClick={handleClick}>
//           {click ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li onClick={closeMobileMenu}>
//             <Link to="/company">company</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/solutions">solutions</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/contact">contact</Link>
//           </li>
//         </ul> */}
//         {/* <ul className={click ? "nav-menu active" : "nav-menu btns"}>
//           <li onClick={closeMobileMenu}>
//             <Link to="/login">login</Link>
//           </li>
//           {button ? (
//             <li onClick={closeMobileMenu}>
//               <Link to="/register">
//                 <Button>register</Button>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/register">
//                 <Button>register</Button>
//               </Link>
//             </li>
//           )}
//         </ul> */}
//       {/* </div> */}
//       <div className="desktop">
//         <ul className={click ? "nav-menu-active" : "nav-menu"}>
//           <li onClick={closeMobileMenu}>
//             <Link to="/company">company</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/solutions">solutions</Link>
//           </li>
//           <li onClick={closeMobileMenu}>
//             <Link to="/contact">contact</Link>
//           </li>
//         </ul>
//         <ul className={click ? "nav-menu-active" : "nav-menu btns"}>
//           <li onClick={closeMobileMenu}>
//             <Link to="/login">login</Link>
//           </li>
//           {button ? (
//             <li onClick={closeMobileMenu}>
//               <Link to="/register">
//                 <Button>register</Button>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/register">
//                 <Button>register</Button>
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </header>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/logo.svg";
import Button from "../components/Button";
import "./Header.css";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else setButton(true);
//   };
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);
//   return (
//     <>
//         <header>
//           <div className="navbar-container container">
//             <div className="logo">
//               <Link to="/">
//                 <img src={logo} alt="Logo" />
//               </Link>
//             </div>
//             <div className="menu-icon" onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </div>
{
  /* <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <li className="nav-item">Home</li>
              </Link>
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <li className="nav-item">Services</li>
              </Link>
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <li className="nav-item">Products</li>
              </Link>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul> */
}
// <ul className={click ? "nav-menu top active" : "nav-menu"}>
//   <li onClick={closeMobileMenu}>
//     <Link to="/company" className="nav-links">company</Link>
//   </li>

{
  /* <Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <li className="nav-item">Products</li>
              </Link> */
}
//               <li onClick={closeMobileMenu}>
//                 <Link to="/solutions" className="nav-links">solutions</Link>
//               </li>
//               <li onClick={closeMobileMenu}>
//                 <Link to="/contact" className="nav-links">contact</Link>
//               </li>
//          </ul>
//          <ul className={click ? "nav-menu active" : "nav-menu"}>
//            <li onClick={closeMobileMenu}>
//              <Link to="/login" className="nav-links">login</Link>
//            </li>
//            {button ? (
//              <li onClick={closeMobileMenu}>
//                <Link to="/register" className="nav-links">
//                  <Button>register</Button>
//                </Link>
//              </li>
//            ) : (
//              <li>
//                <Link to="/register">
//                  <Button>register</Button>
//                </Link>
//              </li>
//            )}
//          </ul>
//           </div>
//         </header>
//     </>
//   );
// }

// export default Navbar;

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <header>
      <section className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" onClick={closeMobileMenu} />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </section>
      <section className="">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" onClick={closeMobileMenu} />
              </Link>
            </div>
          </li>
          <li>
            <ul className="middle">
              <li onClick={closeMobileMenu}>
                <Link to="/about">company</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/packages">solutions</Link>
              </li>
              <li onClick={closeMobileMenu}>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li onClick={closeMobileMenu}>
                <Link to="/login" className="nav-links">
                  login
                </Link>
              </li>
              {button ? (
                <li>
                  <Link to="/signup">
                    <Button>register</Button>
                  </Link>
                </li>
              ) : (
                <li onClick={closeMobileMenu}>
                  <Link to="/signup" className="nav-links">
                    <Button>register</Button>
                  </Link>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </section>
    </header>

    // <header>
    //   <>
    //     <div className="logo">
    //       <Link to="/">
    //         <img src={logo} alt="Logo" onClick={closeMobileMenu} />
    //       </Link>
    //     </div>
    //     <div className="menu-icon" onClick={handleClick}>
    //       {click ? <FaTimes /> : <FaBars />}
    //     </div>
    //   </>
    //   <ul className={click ? "nav-menu active" : "nav-menu"}>
    //     <span>
    //       <li onClick={closeMobileMenu}>
    //         <Link to="/company">company</Link>
    //       </li>
    //       <li onClick={closeMobileMenu}>
    //         <Link to="/solutions">solutions</Link>
    //       </li>
    //       <li onClick={closeMobileMenu}>
    //         <Link to="/contact">contact</Link>
    //       </li>
    //     </span>
    //     <li>
    //       <ul>
    //         <li onClick={closeMobileMenu}>
    //           <Link to="/login" className="nav-links">
    //             login
    //           </Link>
    //         </li>
    //         {button ? (
    //           <li>
    //             <Link to="/signup">
    //               <Button>register</Button>
    //             </Link>
    //           </li>
    //         ) : (
    //           <li onClick={closeMobileMenu}>
    //             <Link to="/signup" className="nav-links">
    //               <Button>register</Button>
    //             </Link>
    //           </li>
    //         )}
    //       </ul>
    //     </li>
    //   </ul>
    // </header>
  );
}

export default Header;
