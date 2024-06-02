import { forwardRef, type InputHTMLAttributes } from 'react';
import cn from 'clsx';

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ children, className, ...props }, ref) => {
  const rootClassName = cn(
    'relative inline-flex items-center justify-center cursor-pointer',
    'no-underline py-0 px-3.5 rounded-md border border-solid border-black',
    'bg-black text-white text-base font-medium outline-none select-none',
    'align-middle whitespace-nowrap leading-10 shadow-md transition-colors',
    className
  );

  return (
    <input ref={ref} className={rootClassName} {...props}>
      {children}
    </input>
  );
});

Input.displayName = 'Input';

export default Input;
