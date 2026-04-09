import styles from './Button.module.css';

export function Button({
  children,
  variant = 'primary',
  size = 'base',
  disabled = false,
  href = null,
  className = '',
  ...props
}) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[`size-${size}`],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // If href is provided, render as <a> tag
  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    return (
      <a
        href={href}
        className={buttonClass}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ href, children, variant = 'primary', size = 'base', className = '', ...props }) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[`size-${size}`],
    styles.link,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={href} className={buttonClass} {...props}>
      {children}
    </a>
  );
}
