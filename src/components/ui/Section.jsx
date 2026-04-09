import styles from './Section.module.css';

export function Section({
  children,
  className = '',
  id = '',
  padded = true,
  ...props
}) {
  const sectionClass = [
    styles.section,
    padded ? styles.padded : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass} id={id} {...props}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
