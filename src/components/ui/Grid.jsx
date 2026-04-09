import styles from './Grid.module.css';

export function Grid({
  children,
  cols = 1,
  gap = 4,
  className = '',
  ...props
}) {
  const gridClass = [
    styles.grid,
    styles[`cols-${cols}`],
    styles[`gap-${gap}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={gridClass} {...props}>
      {children}
    </div>
  );
}

export function GridItem({ children, className = '', ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
