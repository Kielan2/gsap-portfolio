import { useRef } from "react";
import Card from "./Project";
import Spotify from '../images/spotify.png';

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
        { title: "Spotify API", text: "Spotify project using react", imageSrc: Spotify }
    ];

    useGSAP(() => {
        const cardHeight = 500; // Height of each card
        const totalHeight = cardHeight * (cardData.length / 2); // Total height considering two columns
        const startY = projectsContainer.current.offsetHeight; // Start position (bottom of container)

        cardsRef.current.forEach((card, index) => {
            const columnIndex = index % 2; // Determine left or right column
            const rowIndex = Math.floor(index / 2); // Determine row position

            // Adjust x based on column index
            const containerWidth = projectsContainer.current.offsetWidth;
            const cardWidth = containerWidth / 4; // Assuming cards take 25% of the container width
            const xPosition = (containerWidth / 2) - (cardWidth / 2) + (columnIndex === 0 ? -cardWidth : cardWidth);

            gsap.set(card, {
                y: startY + cardHeight * rowIndex - 100, // Start cards just below the view
                x: xPosition, // Dynamically center cards based on container and card width
                scale: 0.5, // Start smaller
                opacity: 0, // Start invisible
            });

            // Animate cards on scroll
            gsap.to(card, {
                y: `-${totalHeight}px`, // Move up by the total height of the cards
                scale: 1, // Grow to full size
                opacity: 1, // Fade in
                scrollTrigger: {
                    trigger: projectsContainer.current,
                    start: `top+=${rowIndex * (cardHeight / 2)}px`,
                    end: `+=${totalHeight / 2}px`,
                    scrub: true,
                    invalidateOnRefresh: true,
                    onEnter: () => gsap.to(card, { scale: .5, opacity: 0 }), // Shrink when exiting
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
