import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LandingPage.css";

function LandingPage() {
    const textRef = useRef(null);

    useEffect(() => {
        const words = textRef.current.querySelectorAll("span");
        
        gsap.fromTo(
            words, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="landing-page">
            <h1 ref={textRef}>
                <span>improve</span> <span className="font-luxury">your</span> <br />
                <span className="no-break">skills <span className="font-luxury">with</span> <span className="highlight">saturday</span></span> <br />
                <span className="highlight">hacknight</span>
            </h1>
        </div>
    );
}

export default LandingPage;
