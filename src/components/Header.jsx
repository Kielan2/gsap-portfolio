import { useRef } from 'react';
import hexagon from '../images/hexagon.mp4';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);

export default function Header() {
    const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            gsap.to(".Header", {
              duration: 15,  // Duration of the full rotation
              backgroundPosition: "200% 0%, 0% 200%, 200% 200%, 0% 0%",
              repeat: -1,    // Repeat indefinitely
              ease: "linear" // Linear motion for a smooth effect
            })
            gsap.from(".Circle", {
              x: "100vw",
              // y: -300,
              duration: 4,
              ease: "bounce.out",
            });
            gsap.from(".Title", {
              x: "-60vw",
              duration: 4,
              ease: "power2.out",
            });
            gsap.from(".material-symbols-outlined", {
              opacity: 0, 
              stagger: 0.2,
              ease: "power1.out",
            });
            
        },
        { scope: container }
    );

    return (
        <div className='Hero'>
          <video autoPlay muted loop id="myVideo">
  <source src={hexagon} type="video/mp4" />
</video>
          <div ref={container} className='Header'>
          <div className='Title'>
            <span>Kielan Anderson</span>
            <h1>Front End Developer</h1>
            </div>
            <svg className='Circle' xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" />
</svg>
<div className='Languages'><span class="material-symbols-outlined">
javascript
</span>
<span class="material-symbols-outlined">
php
</span>
<span  class="material-symbols-outlined">
css
</span></div></div>

        </div>
    );
}
