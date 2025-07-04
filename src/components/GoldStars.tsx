import React from 'react';

const GoldStars = ({ size = 20 }) => {
  const star = (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="url(#goldGrad)" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff8dc" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#f0c000" />
        </linearGradient>
      </defs>
      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
    </svg>
  );

  return <div className="flex items-center gap-1">{star}{star}{star}</div>;
};

export default GoldStars;
