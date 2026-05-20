import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { navItems } from './navItems';

export function Footer() {
  const quickLinks = navItems.filter((item) => item.label !== 'Home');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <img
              src="/GIBBOR_LogoSimplificado.jpeg"
              alt="GIBBOR"
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>GIBBOR</span>
          </div>
          <p className={styles.tagline}>
            Because in an emergency, evidence can't wait.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Navigation</h4>
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
            <a href="mailto:gibborim.devteam@gmail.com" className={styles.link}>
              gibborim.devteam@gmail.com
            </a>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Code</h4>
            <a
              href="https://github.com/EliaquimI/GibborHackaton"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2026 GIBBOR. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
