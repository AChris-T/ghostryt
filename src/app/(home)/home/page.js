import About from '@/components/About';
import AboutCard from '@/components/AboutCard';
import Demo from '@/components/Demo';
import FeedBack from '@/components/FeedBack';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Proof from '@/components/Proof';
import SampleArticle from '@/components/SampleArticle';

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <HeroSection />
      <About />
      <AboutCard />
      <Proof />
      <Demo />
      <FeedBack />
      <SampleArticle />
    </div>
  );
}
