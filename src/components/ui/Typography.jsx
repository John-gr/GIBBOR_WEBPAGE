import styles from './Typography.module.css';

export function Heading({ level = 1, children, className = '', ...props }) {
  const HeadingTag = `h${level}`;
  const headingClass = [styles.heading, styles[`h${level}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <HeadingTag className={headingClass} {...props}>
      {children}
    </HeadingTag>
  );
}

export function Subheading({ children, className = '', ...props }) {
  const subheadingClass = [styles.subheading, className].filter(Boolean).join(' ');

  return (
    <p className={subheadingClass} {...props}>
      {children}
    </p>
  );
}

export function Body({ size = 'base', children, className = '', ...props }) {
  const bodyClass = [styles.body, styles[`body-${size}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <p className={bodyClass} {...props}>
      {children}
    </p>
  );
}

export function Caption({ children, className = '', ...props }) {
  const captionClass = [styles.caption, className].filter(Boolean).join(' ');

  return (
    <span className={captionClass} {...props}>
      {children}
    </span>
  );
}

export function Text({ variant = 'body', className = '', children, ...props }) {
  const textClass = [styles[variant], className].filter(Boolean).join(' ');

  return (
    <span className={textClass} {...props}>
      {children}
    </span>
  );
}
