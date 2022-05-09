import { HTMLButtonProps } from '~/types/JSX';

interface ButtonProps extends HTMLButtonProps {

}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`border-1 bg-primary-main text-white rounded-xl p-(x-2 y-1) ${props.disabled ? 'opacity-40' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
