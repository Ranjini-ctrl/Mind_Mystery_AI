import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = {
    primary: 'bg-primary text-slate-950 shadow-glow shadow-primary/30 hover:brightness-110',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    ghost: 'bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10'
  };

  return <button className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`} {...props} />;
}
