import { ReactNode } from 'react';
import { cn } from '../lib/cn';

interface Props {
  eyebrown: string;
  title: ReactNode;
  description: ReactNode;
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrown, title, description, align = 'center' }: Props) {
  const isCenter = align === 'center';

  return (
    <div className={cn('flex flex-col gap-4', isCenter ? 'text-center items-center' : '')}>
      <span className="inline-flex items-center gap-2 rounded-full bg-primary-transparent text-primary py-0.5 px-3 border-primary uppercase font-semibold tracking-[0.18] w-fit">
        <span className="bg-primary rounded-full h-1.5 w-1.5" />
        {eyebrown}
      </span>
      <h1 className="text-3xl">{title}</h1>
      <p className="text-xl">{description}</p>
    </div>
  );
}
