import { HTMLAttributes, ReactNode } from "react"

interface Props {
  children?: ReactNode;
}

export function Container({className, children, ...divProps}: HTMLAttributes<HTMLDivElement> & Props) {
  const baseStyles = 'max-w-[70vw] max-h-[80vh] size-full m-auto p-5';

  return <div {...divProps}
    className={`${baseStyles} ${className}`}
  >
    {children}
  </div>
}