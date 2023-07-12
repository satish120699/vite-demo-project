interface ButtonProps {
  name: string;
}

export function Button({ name, ...rest }: ButtonProps) {
  return <button {...rest}>{name}</button>;
}
