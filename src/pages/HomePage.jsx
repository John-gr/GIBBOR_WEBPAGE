import { HeroSection } from '../components/landing/HeroSection';
import { ProjectOverview } from '../components/landing/ProjectOverview';

export function HomePage() {
  return (
    <main id="home" style={{ flex: 1 }}>
      <HeroSection />
      <ProjectOverview />
    </main>
  );
}
