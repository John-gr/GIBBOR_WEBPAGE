import styles from './PageDecor.module.css';

export function PageDecor() {
  return (
    <div className={styles.decor} aria-hidden="true">
      <img src="/pattern.svg" className={`${styles.pattern} ${styles.topRight}`}   alt="" />
      <img src="/pattern.svg" className={`${styles.pattern} ${styles.topLeft}`}    alt="" />
      <img src="/pattern.svg" className={`${styles.pattern} ${styles.bottomRight}`} alt="" />
      <img src="/pattern.svg" className={`${styles.pattern} ${styles.bottomLeft}`}  alt="" />
    </div>
  );
}
