import React, { useEffect } from "react";
import "./About.scss";

const About = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const counter = entry.target;

                    if (entry.isIntersecting) {
                        const target = +counter.getAttribute("data-target");
                        let current = 0;

                        const duration = 3000; 
                        const steps = Math.max(Math.floor(target), 50);
                        const increment = target / steps;
                        const intervalTime = duration / steps;

                        const interval = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                counter.innerText = target;
                                clearInterval(interval);
                            } else {
                                counter.innerText = Math.ceil(current);
                            }
                        }, intervalTime);

                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach((counter) => {
            counter.innerText = "0";
            observer.observe(counter);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div id="about" className="about px-3 md:px-8 py-12 md:py-20">
            <div className="about_row flex flex-col md:flex-row justify-center items-center">
                <div
                    className="about_col-1 w-full md:w-1/2 flex justify-center items-center"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="image_section">
                        <img src="https://images.unsplash.com/photo-1588702547924-3f1b6e7d3c9b" alt="About Us" />
                    </div>
                </div>
                <div
                    className="about_col-2 w-full md:w-1/2 flex justify-center items-center"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-out"
                >
                    <div className="content_section">
                        <h4 className="subtitle md:text-2xl font-bold text-[var(--accent-color)] my-1 md:my-2">About Us</h4>
                        <h2 className="title text-2xl sm:text-3xl xl:text-5xl md:text-4xl font-bold text-[var(--text-color)] tracking-[1.2px] md:leading-14 my-3 xl:my-5 md:my-4">
                            We are a team of passionate individuals
                        </h2>
                        <p className="description text-[var(--para-color)] italic mb-2 xl:text-lg md:text-base sm:text-sm">
                            At <strong className="text-[var(--accent-color)]">DigitalVoiz</strong>, we ignite digital
                            transformation by converting visionary ideas into immersive experiences. Our team of creative
                            technologists blends state-of-the-art IT solutions with innovative design, ensuring that every
                            project we touch elevates your business to new heights. Passionate about fostering growth and
                            empowering change, we work closely with our clients to turn challenges into breakthrough
                            opportunities. Embrace the future with a partner that’s as committed to your digital journey as
                            you are.
                        </p>
                    </div>
                </div>
            </div>
            <div
                className="about_row-2 mt-10 lg:mt-20 mb-6 py-8 flex flex-wrap justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="200"
                data-aos-easing="ease-in-out"
            >
                <div className="item w-1/2 md:w-1/2 lg:w-1/4 my-3 py-3">
                    <div className="countdown-box flex gap-4 align-center justify-center ">
                        <div className="countdown text-2xl md:text-4xl lg:text-5xl text-[var(--accent-color)] font-bold">
                            <span className="counter" data-target="98">
                                0
                            </span>
                            %
                        </div>
                        <div class="counter-text text-[var(--para-color)] text-md md:text-lg lg:text-xl">
                            <p>
                                Satisfied <br /> clients
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item w-1/2 md:w-1/2 lg:w-1/4 my-3 py-3">
                    <div className="countdown-box flex gap-4 align-center justify-center">
                        <div className="countdown text-2xl md:text-4xl lg:text-5xl text-[var(--accent-color)] font-bold">
                            <span className="counter" data-target="8">
                                0
                            </span>
                        </div>
                        <div class="counter-text text-[var(--para-color)] text-md md:text-lg lg:text-xl">
                            <p>
                                professional <br /> employees
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item w-1/2 md:w-1/2 lg:w-1/4 my-3 py-3">
                    <div className="countdown-box flex gap-4 align-center justify-center">
                        <div className="countdown text-2xl md:text-4xl lg:text-5xl text-[var(--accent-color)] font-bold">
                            <span className="counter" data-target="20">
                                0
                            </span>
                            +
                        </div>
                        <div class="counter-text text-[var(--para-color)] text-md md:text-lg lg:text-xl">
                            <p>
                                Projects <br /> Completed
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item w-1/2 md:w-1/2 lg:w-1/4 my-3 py-3">
                    <div className="countdown-box flex gap-4 align-center justify-center">
                        <div className="countdown text-2xl md:text-4xl lg:text-5xl text-[var(--accent-color)] font-bold">
                            <span className="counter" data-target="2">
                                0
                            </span>
                            +
                        </div>
                        <div class="counter-text text-[var(--para-color)] text-md md:text-lg lg:text-xl">
                            <p>
                                Years <br /> Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
