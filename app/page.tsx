import Navbar from "./components/navbar";
// import SocialLinks from "./components/socialIcons";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Companies from "./sections/Companies";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import GetInTouch from "./sections/GetInTouch";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      {/* <SocialLinks /> */}
      <main>
        <Hero />
        <About />
        <Companies />
        <Projects />
        <Achievements />
        <GetInTouch />
      </main>
    </div>
  );
}
