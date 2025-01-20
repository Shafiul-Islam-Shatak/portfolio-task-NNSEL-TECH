import Banner from "./components/Banner/Banner";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsHighlight from "./components/ProjectsHighlight/ProjectsHighlight";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Banner />
      <HeroSection />
      <ProjectsHighlight/>
      <Testimonial/>
    </main>
  );
}
