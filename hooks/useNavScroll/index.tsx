"use client";
import { useEffect, useState } from "react";

const useNavScrolAnimation = () => {
  const [navColor, setNavColor] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
      lastScrollY = window.scrollY;

      if (window.scrollY >= 140) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    });
  }, [navScroll, navColor]);

  return [navColor, navScroll];
};

export default useNavScrolAnimation;
