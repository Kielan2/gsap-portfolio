import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

function Tween({ children, animation, scope }) {
  const elementRef = useRef();

  useGSAP(() => {
    gsap.to(elementRef.current, animation);
  }, { scope });

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
}

export default Tween;
