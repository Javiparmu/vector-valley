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
        <SvelteIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-2s' }}/>
        <TrpcIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-4s' }} />
        <AstroIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-6s' }} />
        <NodeIcon className={`round-motion absolute w-22 h-22 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-8s' }} />
        <ReactIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-10s' }} />
        <NextIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-12s' }} />
        <RedisIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-14s' }} />
        <AwsIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-16s' }} />
        <GcpIcon className={`round-motion absolute w-20 h-20 ${isPaused ? 'paused' : ''}`} style={{ animationDelay: '-18s' }} />
      </div>
    </div>
  );
};

export default ElipseIcons;
