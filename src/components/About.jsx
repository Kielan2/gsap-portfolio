import React from "react";
import SLCC from '../images/images.png'
import Boostability from '../images/boostability.webp'
import devs from '../images/devs.png'

export default function About() {

  return (
    <div className="About">
      <div className="About-inner">
        <div className="Summary Frost">
          <h2>About Me</h2>
          <p>
            I'm a passionate Software Engineer based in the vibrant city of Salt
            Lake City, UT. My journey in programming began in September 2021,
            and since then, I've honed my skills in full-stack JavaScript
            development. Problem-solving is my forte, and I thrive on creating
            elegant solutions to complex challenges.
          </p>

          <h3>Skills & Interests</h3>

          <p>
            From building dynamic web applications to exploring the latest in
            web technologies, I’m always excited to push the boundaries of
            what’s possible. Below, you’ll find a glimpse of my technical
            skills, favorite aspects of web development, and a few hobbies that
            keep me inspired.
          </p>
        </div>
      
      <div className="Experience">
        <h3 className="Frost">My Experience</h3>
        <div className="Cards">
        <div className="Frost">
  <img className='White-image' src="https://onlineimage.com/wp-content/uploads/2021/09/logo-oi.svg" alt="Logo" />
  <p>Front End Developer</p>
</div>
<div className="Frost">
<img className='White-image' src={Boostability} alt="Boostability Logo" />
  <p>Web Developer</p>
</div>
<div className="Frost">
<img className='Grey-image'  src={devs} alt="devs Logo" />
  <p>Bootcamp</p>
</div>
<div className="Frost">
<img className='White-image' src={SLCC} alt="SLCC Logo" />
  <p>Associate's Degree</p>
</div>
</div>
      </div>

      </div>
    </div>
  );
}
