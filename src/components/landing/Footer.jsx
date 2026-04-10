import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Body, Caption } from '../ui/Typography';
import { navItems } from './navItems';

export function Footer() {
  const quickLinks = navItems.filter((item) => item.label !== 'Home');
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>GIBBOR</h4>
            <Body size="sm" className={styles.link}>
              Immutable evidence on the public blockchain.
            </Body>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <nav className={styles.links}>
              {quickLinks.map((item) => (
                <Link key={item.path} to={item.path} className={styles.link}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <a href="mailto:basurtoocampo.laura@gmail.com" className={styles.link}>
              basurtoocampo.laura@gmail.com
            </a>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Social</h4>
            <nav className={styles.links}>
              <a href="https://github.com/EliaquimI/GibborHackaton" className={styles.link} aria-label="GitHub">
                GitHub
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
