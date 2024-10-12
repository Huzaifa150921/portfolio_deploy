// src/components/CustomCursor.js

import React, { useEffect } from 'react';
import { snowflakeCursor } from 'cursor-effects'; // Import snowflakeCursor

const CustomCursor = () => {
  useEffect(() => {
    // Initialize the snowflake cursor effect
    snowflakeCursor({
      size: 500, // Size of the snowflakes
      count: 300, // Number of snowflakes to create
      color: 'rgba(255, 255, 255, 0.8)', // Color of the snowflakes
      animationDuration: 30, // Duration for the animation
      glow: true, // Enable glow effect
      glowColor: 'rgba(173, 216, 230, 0.8)', // Glow color
      glowSize: 100, // Size of the glow
    });
  }, []);

  return null; // This component doesn't render anything to the DOM
};

export default CustomCursor;
