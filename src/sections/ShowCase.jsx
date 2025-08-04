import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a
                href="https://apple-iphone16-landing-website.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/project1.png"
                  alt="Iphone 16 Pro"
                  className="object-contain cursor-pointer"
                />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Interact with a 3D iPhone 16 Pro model rendered in real-time,
                with customizable colors and sizes..
              </h2>
              <p className="text-white-50 md:text-xl">
                This is a clone of Apple's iPhone 16 Pro website using React.js
                and TailwindCSS. It highlights the effective use of GSAP
                (Greensock Animations) and Three.js for displaying iPhone 16 Pro
                models in various colors and shapes.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#f5f5ef]">
                <a
                  href="https://expo.dev/preview/update?message=Publishing+in+Expo+GO&updateRuntimeVersion=1.0.0&createdAt=2025-07-27T17%3A44%3A03.871Z&slug=exp&projectId=6bc466d9-f98e-4643-8f74-c7fde9249390&group=1bc969a7-de45-4350-b6a3-46da68fc8311"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/project2.png" alt="Real Estate App" />
                </a>
              </div>
              <h2>Real Estate App</h2>
              <p className="text-white-50 md:text-xl tracking-tighter">
                A sleek and intuitive mobile real estate app built with React
                Native, Expo, TypeScript, and Tailwind CSS. It offers a smooth
                and immersive experience for browsing and discovering
                properties, powered by real-time data and backend services via
                Appwrite.
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe9db]">
                <a
                  href="https://gsap-pisco-sour-landing-website.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/project3.png" alt="" />
                </a>
              </div>
              <h2>Pisco Sour Cocktail</h2>
              <p className="text-white-50 md:text-xl tracking-tighter">
                A sleek and interactive cocktail landing page built with React,
                Tailwind CSS, and GSAP. It delivers a smooth, scroll-driven
                experience. Designed to be fully responsive and visually
                engaging, this project showcases advanced animation techniques
                and modern UI design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
