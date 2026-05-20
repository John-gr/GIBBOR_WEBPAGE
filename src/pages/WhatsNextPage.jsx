import { WhatsNext } from '../components/landing/WhatsNext';
import { PageDecor } from '../components/landing/PageDecor';

export function WhatsNextPage() {
  return (
    <main id="whats-next" style={{ flex: 1, position: 'relative' }}>
      <PageDecor />
      <WhatsNext />
    </main>
  );
}
