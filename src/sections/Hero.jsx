import { useGSAP } from "@gsap/react";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { words } from "../constants/index";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import { useState } from "react";

const Hero = () => {
  const [startCounting, setStartCounting] = useState(false);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    );
  });
  const handleClick = () => {
    setStartCounting(true);
    const target = document.getElementById("counter");
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col md:gap-7 gap-4">
            <div className="hero-text">
              <h1>
                Turn
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Scalable Products</h1>
              <h1>that Solve Business Challenges</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none tracking-tighter">
              Hi, I'm Nadji - I transform business goals into high-performing
              digital experiences.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              text="See my Work"
              onClick={handleClick}
            />
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter start={startCounting} />
    </section>
  );
};

export default Hero;
