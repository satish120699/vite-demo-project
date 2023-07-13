interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({ children, onClick, type = 'button', className = '', ...rest }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`border rounded-full ${className}`} {...rest}>
      {children}
    </button>
  );
}
