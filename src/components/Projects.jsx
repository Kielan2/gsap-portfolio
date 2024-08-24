import { useRef } from "react";
import Card from "./Project";
import Spotify from '../images/spotify.png'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
	const projectsContainer = useRef(null);
  const cardsRef = useRef([]);

  const cardData = [
    { title: "Card 1", text: "This is the first card.", imageSrc: "https://via.placeholder.com/100" },
    { title: "Card 2", text: "This is the second card.", imageSrc: "https://via.placeholder.com/100" },
    { title: "Card 3", text: "This is the third card.", imageSrc: "https://via.placeholder.com/100" },
    { title: "Card 4", text: "This is the fourth card.", imageSrc: "https://via.placeholder.com/100" },
    { title: "Card 5", text: "This is the fifth card.", imageSrc: "https://via.placeholder.com/100" },
    { title: "Spotify API", text: "Spotify project using react", imageSrc:Spotify }
  ];

  useGSAP(() => {
    const numCards = cardsRef.current.length;
    const angleIncrement = 360 / numCards;

    cardsRef.current.forEach((card, index) => {
      const angle = index * angleIncrement;

      // Set initial positions
      gsap.set(card, {
        rotateY: angle,
        z: -500,
        transformOrigin: "50% 50%"
      });

      // Animate cards on scroll
      gsap.to(card, {
        z: "+=1000",
        rotateY: `+=360`,
        scrollTrigger: {
          trigger: projectsContainer.current,
          start: "top right",
          end: "bottom left",
          scrub: true
        }
      });
    });
  }, { scope: projectsContainer });

  return (
    <div className="Projects-container" ref={projectsContainer}>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          imageSrc={card.imageSrc}
          ref={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </div>
  );
}

export default Projects;
