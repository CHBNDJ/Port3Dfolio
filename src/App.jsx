import NavBar from "./components/NavBar";
import FeatureCard from "./sections/FeatureCard";
import Hero from "./sections/Hero";
import ShowCase from "./sections/ShowCase";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <FeatureCard />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
