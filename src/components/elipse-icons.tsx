'use client';

import React, { useState } from 'react';
import { AstroIcon, AwsIcon, GcpIcon, NextIcon, NodeIcon, ReactIcon, RedisIcon, SvelteIcon, TailwindIcon, TrpcIcon } from './icons';

const ElipseIcons = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className='w-screen m-32 z-10'>
      <div className="absolute left-[50%] transform -translate-x-1/2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <TailwindIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} />
        <SvelteIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-1.6s' }}/>
        <TrpcIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-3.2s' }} />
        <AstroIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-4.8s' }} />
        <NodeIcon className={`round-motion absolute w-22 h-22 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-6.4s' }} />
        <ReactIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-8s' }} />
        <NextIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-9.6s' }} />
        <RedisIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-11.2s' }} />
        <AwsIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-12.8s' }} />
        <GcpIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-14.4s' }} />
      </div>
    </div>
  );
};

export default ElipseIcons;
