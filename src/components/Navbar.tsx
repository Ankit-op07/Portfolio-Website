import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import { motion } from "framer-motion";

const Navbar = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(-180);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  // useEffect(() => {
   
  // }, [theme]);



  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  const handleMode = ()=>{
    setTheme(theme === 'night' ? 'light' : 'night');
    localStorage.setItem('theme',theme)
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div
        className={`${
          visible ? "top-4 " : ""
        }  sticky  h-20 border-2 mx-8 mt-4 bg-black rounded-3xl  z-50 flex justify-evenly items-center    `}
      >
        <div className="text-gray-200 flex w-full text-lg  ">
          <div className="flex justify-evenly items-center w-5/12">
            <div className="cursor-pointer ">Home</div>
            <div className="cursor-pointer">About</div>
          </div>

          <div className="cursor-pointer w-2/12 flex justify-center items-center">
            <motion.div
              className="box"
              animate={{ x, y, rotate }}
              transition={{ type: "spring" }}
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.5 6.97918V33.5M33.5 33.5L57.2292 20.317M33.5 33.5L9.77083 20.317M33.5 33.5V60.0208M57.2292 46.6829L35.6692 34.7051C34.8775 34.2653 34.4816 34.0454 34.0624 33.9591C33.6913 33.8828 33.3087 33.8828 32.9376 33.9591C32.5184 34.0454 32.1225 34.2653 31.3308 34.7051L9.77083 46.6829M58.625 44.8301V22.1699C58.625 21.2133 58.625 20.7351 58.4841 20.3085C58.3594 19.9311 58.1556 19.5847 57.8862 19.2925C57.5818 18.9621 57.1637 18.7299 56.3275 18.2653L35.6692 6.78846C34.8775 6.34861 34.4816 6.12868 34.0624 6.04246C33.6913 5.96615 33.3087 5.96615 32.9376 6.04246C32.5184 6.12868 32.1225 6.34861 31.3308 6.78846L10.6725 18.2653C9.83629 18.7299 9.4182 18.9621 9.11377 19.2925C8.84444 19.5847 8.64062 19.9311 8.51594 20.3085C8.375 20.7351 8.375 21.2133 8.375 22.1699V44.8301C8.375 45.7867 8.375 46.265 8.51594 46.6915C8.64062 47.0689 8.84444 47.4153 9.11377 47.7075C9.41821 48.0379 9.83629 48.2702 10.6725 48.7347L31.3308 60.2116C32.1225 60.6514 32.5184 60.8713 32.9376 60.9576C33.3087 61.0339 33.6913 61.0339 34.0624 60.9576C34.4816 60.8713 34.8775 60.6514 35.6692 60.2116L56.3275 48.7347C57.1637 48.2702 57.5818 48.0379 57.8862 47.7075C58.1556 47.4153 58.3594 47.0689 58.4841 46.6915C58.625 46.265 58.625 45.7867 58.625 44.8301Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-divnecap="round"
                  stroke-divnejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          <div className="flex justify-evenly items-center w-5/12">
            <div className="cursor-pointer ">Projects</div>
            <div className="cursor-pointer">Services</div>

            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onClick={handleMode}/>

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <Home />
    </>
  );
};

export default Navbar;
