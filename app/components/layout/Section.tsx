import { HTMLAttributes, ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export function Section({children, className, ...sectionProps}: HTMLAttributes<HTMLElement> & Props) {
  const baseStyles = 'min-h-[100dvh]';
  return <section 
  {...sectionProps}
  className={`${baseStyles} ${className}`}
  >
    {children}
  </section>
}