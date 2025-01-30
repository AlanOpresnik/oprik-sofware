import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export const animationLeft = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(
        '#DaysDivider',
        { opacity: 0, y: 200 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#pricing',
                start: "top 75%",
                toggleActions: "play none none none",
            },
        }
    );
}