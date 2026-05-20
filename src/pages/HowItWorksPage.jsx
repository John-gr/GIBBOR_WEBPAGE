import { HowItWorks } from '../components/landing/HowItWorks';
import { PageDecor } from '../components/landing/PageDecor';

export function HowItWorksPage() {
  return (
    <main id="how-it-works" style={{ flex: 1, position: 'relative' }}>
      <PageDecor />
      <HowItWorks />
    </main>
  );
}
