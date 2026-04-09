import { Section } from '../components/ui/Section';
import { Heading } from '../components/ui/Typography';

export function AboutPage() {
  return (
    <main id="about" style={{ flex: 1 }}>
      <Section padded>
        <Heading level={1}>About GIBBOR</Heading>
        <p style={{ marginTop: '1rem', lineHeight: 1.6, color: '#1D1D1F' }}>
          GIBBOR (Getting Immutable Blockchain-Based Observable Records) is a mission-driven platform 
          designed to create permanent, verifiable records of critical evidence on the public blockchain.
        </p>
        <p style={{ marginTop: '1rem', lineHeight: 1.6, color: '#1D1D1F' }}>
          Our vision is to democratize access to evidence integrity, ensuring that critical recordings 
          and documentation cannot be altered, lost, or denied. By leveraging blockchain technology and 
          cryptographic verification, we provide institutional credibility and legal admissibility to 
          time-sensitive evidence capture.
        </p>
        <p style={{ marginTop: '1rem', lineHeight: 1.6, color: '#1D1D1F' }}>
          Whether you're a legal professional, journalist, activist, or institution protecting critical 
          moments, GIBBOR ensures your evidence is immutable, verifiable, and secure forever.
        </p>
      </Section>
    </main>
  );
}
