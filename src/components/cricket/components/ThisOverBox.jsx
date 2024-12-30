import React, { useState, useEffect } from 'react';

// Add getBallTypeClass helper function
const getBallTypeClass = (type) => {
  switch (type) {
    case 'wicket': return 'bg-gradient-to-br from-red-500 to-red-600';
    case 'four': return 'bg-gradient-to-br from-blue-500 to-blue-600';
    case 'six': return 'bg-gradient-to-br from-green-500 to-green-600';
    case 'wide': return 'bg-gradient-to-br from-purple-500 to-purple-600';
    case 'noball': return 'bg-gradient-to-br from-yellow-500 to-yellow-600';
    case 'legbye': return 'bg-gradient-to-br from-orange-500 to-orange-600';
    default: return 'bg-gradient-to-br from-gray-600 to-gray-700';
  }
};

const ThisOverBox = ({ overData, isComplete, additionalInfo }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showDotBall, setShowDotBall] = useState(true);

  useEffect(() => {
    if (additionalInfo?.includes('Over')) {
      setShowDotBall(false);
    } else {
      setShowDotBall(true);
    }
  }, [additionalInfo]);

  useEffect(() => {
    if (isComplete || overData?.totalChanged) {
      setShouldAnimate(true);
      const timer = setTimeout(() => {
        setShouldAnimate(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isComplete, overData?.totalChanged]);

  return (
    <div className="relative rounded-lg p-4 
                    animated-content-box premium-box-shadow content-box-glow
                    border border-blue-400/20
                    transition-all duration-500">
      <h3 className="text-lg font-semibold text-[#e5e5e5] leading-none
                     drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)] mb-2">
        This Over
      </h3>
      <div className="flex flex-wrap gap-2 justify-start">
        {overData?.balls?.map((ball, index) => (
          <span
            key={index}
            className={`w-10 h-10 flex-shrink-0 flex items-center justify-center 
                       rounded-full text-xl font-bold
                       ${getBallTypeClass(ball.type)}
                       text-[#e5e5e5] leading-none
                       drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]
                       transition-all duration-300
                       ${shouldAnimate ? 'animate-pulse' : ''}`}
          >
            {ball.value}
          </span>
        ))}
        {showDotBall && !overData?.balls?.length && (
          <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center 
                          rounded-full text-xl font-bold
                          bg-gradient-to-br from-gray-600 to-gray-700
                          text-[#e5e5e5] leading-none
                          drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]
                          transition-all duration-300">
            •
          </span>
        )}
      </div>
    </div>
  );
};

export default ThisOverBox; 