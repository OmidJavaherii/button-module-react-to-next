import React from 'react';
import './Button.css';

export type Variant = 'primary' | 'secondary' | 'danger';
export type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  return (
    <button className={`btn ${variant} ${size}`} onClick={() => alert('clicked!')} {...props}>
      {children}
    </button>
  );
};