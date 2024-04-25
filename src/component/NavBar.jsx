"use client";
import React, { useState, useEffect, useRef } from "react";
import navItems from "../assets/JSON fILES/navItems.json";
import Link from "next/link";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 350) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServiceClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`px-8 top-10 ${scrolled ? "bg-white" : ""}`}>
      <div className="h-32 mt-0 relative px-6 ">
        <img src="/dataspacelogo1.png" alt="" className="h-16 absolute top-5" />
        <div className="flex justify-end">
          <ul
            className={`flex gap-8 absolute top-12 right-32 font-light text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:underline underline-offset-1 active:text-blue-900"
              >
                {item.dropdown ? (
                  <div className="relative" onClick={handleServiceClick}>
                    <span>{item.title}</span>
                    {showDropdown && (
                      <ul
                        ref={dropdownRef}
                        className={`absolute top-full left-0 shadow-md rounded-b-lg ${
                          scrolled
                            ? "bg-white text-black"
                            : "bg-[#062435] text-white"
                        }`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className={`block w-64 text-m hover:bg-blue-100/90 py-2 px-2 ${
                                scrolled ? "text-black" : "text-white"
                              }`}
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.link}>
                    <a>{item.title}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <img
            src="/NavImg.jpeg"
            alt=""
            className="h-12 w-12 rounded-full absolute top-9"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
