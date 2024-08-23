import React from 'react';
import { useGSAP } from '@gsap/react';

const SlideComponent = ({ children, distance = 100, duration = 1, direction = 'left', startDelay = 0 }) => {
  let x = 0, y = 0;

  switch (direction) {
    case 'left':
      x = -distance;
      break;
    case 'right':
      x = distance;
      break;
    case 'up':
      y = -distance;
      break;
    case 'down':
      y = distance;
      break;
    default:
      break;
  }

  return (
    <Timeline target={<div>{children}</div>} repeat={0}>
      <Tween 
        from={{ x, y, opacity: 0 }} 
        to={{ x: 0, y: 0, opacity: 1 }} 
        duration={duration} 
        delay={startDelay}
      />
    </Timeline>
  );
};

export default SlideComponent;
