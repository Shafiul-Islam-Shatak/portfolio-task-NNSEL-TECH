import Banner from "./components/Banner/Banner";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectsHighlight from "./components/ProjectsHighlight/ProjectsHighlight";

export default function Home() {
  return (
    <main>
      <Banner />
      <HeroSection />
      <ProjectsHighlight/>
    </main>
  );
}
