import { Header } from '../components/landing/Header';
import { Layout } from '../components/landing/Layout';
import { HeroSection } from '../components/landing/HeroSection';
import { ProjectOverview } from '../components/landing/ProjectOverview';
import { HowItWorks } from '../components/landing/HowItWorks';
import { TeamSection } from '../components/landing/TeamSection';
import { Footer } from '../components/landing/Footer';

export function Landing() {
  return (
    <Layout>
      <Header />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <ProjectOverview />
        <HowItWorks />
        <TeamSection />
      </main>
      <Footer />
    </Layout>
  );
}
