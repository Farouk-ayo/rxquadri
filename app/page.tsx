import Navbar from "./components/navbar";
// import SocialLinks from "./components/socialIcons";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Companies from "./sections/Companies";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      {/* <SocialLinks /> */}
      <main>
        <Hero />
        <About />
        <Companies />
      </main>
    </div>
  );
}
