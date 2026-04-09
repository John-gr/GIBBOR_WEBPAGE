import styles from './Card.module.css';

export function Card({ children, className = '', ...props }) {
  const cardClass = [styles.card, className].filter(Boolean).join(' ');
  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }) {
  const contentClass = [styles.content, className].filter(Boolean).join(' ');
  return (
    <div className={contentClass} {...props}>
      {children}
    </div>
  );
}
