import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { Heading, Subheading } from '../ui/Typography';
import { Button } from '../ui/Button';

export function HeroSection() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Background gradient overlay */}
      <div className={styles.background}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <Heading level={1} className={styles.headline}>
            Immutable Evidence on the Public Blockchain
          </Heading>

          <Subheading className={styles.subheadline}>
            When a crime happens, evidence gets lost, altered, or dismissed. GIBBOR
            is a panic button that anchors GPS, timestamp, and evidence hash to the
            Stellar blockchain in under 30 seconds.
          </Subheading>

          <div className={styles.ctaContainer}>
            <Button size="lg" onClick={handleLearnMore}>
              Learn More
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="https://github.com/EliaquimI/GibborHackaton"
            >
              View Documentation
            </Button>
          </div>
        </div>

        <div className={styles.visualization}>
          <div className={styles.visualElement}>
            <svg viewBox="0 0 200 200" className={styles.svg}>
              <circle cx="100" cy="100" r="80" fill="none" stroke="#0071E3" strokeWidth="2" opacity="0.2" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="#0071E3" strokeWidth="2" opacity="0.4" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#0071E3" strokeWidth="2" opacity="0.6" />
              <circle cx="100" cy="100" r="20" fill="#0071E3" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
