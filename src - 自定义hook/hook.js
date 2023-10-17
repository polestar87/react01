import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function useScroll(){
  let [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setScrollY(window.scrollY);
    window.onscroll = function() {
      setScrollY(window.scrollY);
    };
    return () => {
      window.onscroll = null;
    }
  }, [])
  let scrollTo = (Y) => {
    window.scrollTo(0, Y);
    setScrollY(Y)
  }
  return [scrollY, scrollTo];
}

export {useScroll}