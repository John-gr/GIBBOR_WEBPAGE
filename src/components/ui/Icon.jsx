export function Icon({ src, alt = '', size = 24, className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
}

export function SVGIcon({
  viewBox = '0 0 24 24',
  children,
  size = 24,
  className = '',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}
