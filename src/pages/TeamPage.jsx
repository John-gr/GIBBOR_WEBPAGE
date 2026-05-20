import { TeamSection } from '../components/landing/TeamSection';
import { PageDecor } from '../components/landing/PageDecor';

export function TeamPage() {
  return (
    <main id="team" style={{ flex: 1, position: 'relative' }}>
      <PageDecor />
      <TeamSection />
    </main>
  );
}
