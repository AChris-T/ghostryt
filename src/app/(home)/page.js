import About from "@/components/About";
import AboutCard from "@/components/AboutCard";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <About/>
    <AboutCard/>
   </div>
  );
}
