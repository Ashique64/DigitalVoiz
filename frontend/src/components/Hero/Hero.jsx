import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div id="hero" className="hero min-w-full min-h-screen bg-[var(--secondary-color)] py-16 flex flex-col ">
            <div className="hero-row mx-auto flex flex-1 ps-8 pe-2">
                <div className="hero_col-1 w-full xl:w-1/2 md:w-1/2 sm:w-full px-3">
                    <div className="content_section flex items-center h-full">
                        <div className="content-wrapper h-full w-full flex flex-col justify-center">
                            <h4 className="subtitle text-2xl font-bold text-[var(--accent-color)] my-2">
                                Welcome to Digital<span>Voiz</span>
                            </h4>
                            <h1 className="title text-5xl font-bold text-[var(--text-color)] tracking-[1.2px] leading-14 my-5">Transforming Your Visions into Digital Reality</h1>
                            <p className="text-[var(--para-color)] italic mb-2">
                                Your trusted partner for scalable IT solutions. We combine strategy, technology, and passion
                                to turn challenges into opportunities—helping your business thrive in the digital age.
                            </p>
                            <a href="#services" className="bg-[var(--accent-color)] text-[var(--primary-color)] font-bold tracking-[1.2px] px-6 py-3 w-max my-4 uppercase">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
