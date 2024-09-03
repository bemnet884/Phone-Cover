import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  const { basePath } = useRouter();

  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={
          dark
            ? `${basePath}/phonetemplatedarkedges.png`
            : `${basePath}/phonetemplatewhiteedges.png`
        }
        className='pointer-events-none z-50 select-none'
        alt='phone image'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover min-w-full min-h-full'
          src={`${basePath}${imgSrc}`}
          alt='overlaying phone image'
        />
      </div>
    </div>
  );
};

export default Phone;
