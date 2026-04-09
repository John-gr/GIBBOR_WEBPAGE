import styles from './Footer.module.css';
import { Body, Caption } from '../ui/Typography';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>GIBBOR</h4>
            <Body size="sm" className={styles.sectionText}>
              Immutable evidence on the public blockchain.
            </Body>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.links}>
              <a href="#overview" className={styles.link}>
                About
              </a>
              <a href="#how-it-works" className={styles.link}>
                How It Works
              </a>
              <a href="#team" className={styles.link}>
                Team
              </a>
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <a href="mailto:info@gibbor.io" className={styles.link}>
              info@gibbor.io
            </a>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Social</h4>
            <nav className={styles.links}>
              <a href="#" className={styles.link} aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className={styles.link} aria-label="GitHub">
                GitHub
              </a>
              <a href="#" className={styles.link} aria-label="LinkedIn">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <Caption>© 2026 GIBBOR. All rights reserved.</Caption>
        </div>
      </div>
    </footer>
  );
}
