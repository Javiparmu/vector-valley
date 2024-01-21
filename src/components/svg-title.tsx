'use client';

import React, { useEffect, useState } from 'react'

const SvgTitle = () => {
    const [showText, setShowText] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);
  
    useEffect(() => {
      setStartAnimation(true);
      const timer = setTimeout(() => {
        setShowText(true);
      }, 500);
  
      return () => clearTimeout(timer);
    }, []);

    return (
        <div className="text-8xl flex items-center">
            <span className={`transition duration-1000 ease-in-out ${startAnimation ? 'translate-x-[-4.7rem] text-red-500 dark:text-indigo-400' : 'translate-x-0 dark:white'}`}>&lt;</span>
            <span className={`py-2 text-7xl text-red-500 dark:text-indigo-400 left-1/2 transform -translate-x-1/2 absolute text-center ${showText ? 'animate-fade-in-display' : 'opacity-0 hidden dark:white'}`}>/svg</span>
            <span className={`transition duration-1000 ease-in-out ${startAnimation ? 'translate-x-[4.7rem] text-red-500 dark:text-indigo-400' : 'translate-x-0 dark:white'}`}>&gt;</span>
        </div>
    )
}

export default SvgTitle