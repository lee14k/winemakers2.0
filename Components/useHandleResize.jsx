'use client'

import {useEffect, useState} from "react";


const useHandleResize = (setIsMobile) => {
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Check initial window width on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);
}

export default useHandleResize;
