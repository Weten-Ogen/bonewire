'use client';

import { cn } from '@/lib/utils';

import CountUp from 'react-countup';

interface animatedprops {
    className? :string,
    end : number,
    suffix? : string,
    prefix? : string,
}

const AnimatedCounter = ({end,className,prefix,suffix}:animatedprops) => {
  return (
    <div className={cn("w-full",className)}>
      <CountUp 
        decimals={0}
         decimal=","
        suffix={suffix}
        prefix={prefix}
        end={end} 
      />
    </div>
  )
}

export default AnimatedCounter