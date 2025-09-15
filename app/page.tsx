import BackgroundPattern from "@/components/ui/bg-pattern";
import Navbar from "./components/navbar";
import SocialLinks from "./components/socialIcons";
import Hero from "./sections/Hero";
import About from "./sections/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundPattern />
      <Navbar />
      <SocialLinks />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
