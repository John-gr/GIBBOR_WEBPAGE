import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { Heading, Subheading } from '../ui/Typography';
import { Button } from '../ui/Button';

function StarIcon({ size = 28, color = '#FF1F8E' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <path d="M14 0 L15.8 10.5 L26 9 L17.5 15.5 L22 25.5 L14 19.5 L6 25.5 L10.5 15.5 L2 9 L12.2 10.5 Z" fill={color} />
      <circle cx="14" cy="14" r="3" fill="rgba(7,7,26,0.6)" />
    </svg>
  );
}

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.overlay} />

      {/* Decorative bracket corners */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      {/* Decorative stars */}
      <div className={`${styles.deco} ${styles.decoStar1}`}><StarIcon size={32} color="#FF1F8E" /></div>
      <div className={`${styles.deco} ${styles.decoStar2}`}><StarIcon size={22} color="#00CFFF" /></div>
      <div className={`${styles.deco} ${styles.decoStar3}`}><StarIcon size={18} color="#FF6B1A" /></div>

      {/* Floating dots */}
      <div className={`${styles.dot} ${styles.dot1}`} />
      <div className={`${styles.dot} ${styles.dot2}`} />
      <div className={`${styles.dot} ${styles.dot3}`} />
      <div className={`${styles.dot} ${styles.dot4}`} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Security for travelers</div>

          <Heading level={1} className={styles.headline}>
            Because in an emergency,{' '}
            <span className={styles.highlight}>evidence can't wait.</span>
          </Heading>

          <Subheading className={styles.subheadline}>
            GIBBOR is a one-button security system. Press it and the system activates
            automatically — recording your exact location, capturing audio, and generating
            a sealed digital proof that no one can alter.
          </Subheading>

          <div className={styles.ctaContainer}>
            <Button size="lg" onClick={() => navigate('/how-it-works')}>
              How It Works
            </Button>
            <Button variant="secondary" size="lg" href="https://github.com/EliaquimI/GibborHackaton">
              View on GitHub
            </Button>
          </div>
        </div>

        <div className={styles.visualization}>
          <div className={styles.logoWrap}>
            <div className={styles.glowRing} />
            <img
              src="/inspo/GIBBOR_Logo.jpeg"
              alt="GIBBOR alebrije mascot pressing the panic button"
              className={styles.heroLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
