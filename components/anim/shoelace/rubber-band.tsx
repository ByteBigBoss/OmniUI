"use client"
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Define the types for the SlAnimation component props
interface SlAnimationProps {
  name: string;
  duration: number;
  iterations: number;
  play: boolean;
  onSlFinish?: () => void;
  children?: React.ReactNode;
}

const SlAnimation = dynamic<SlAnimationProps>(() => import('@shoelace-style/shoelace/dist/react/animation'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

interface RubberBandElementProps {
  children: React.ReactNode;
  className?: string;
}

export const RubberBandElement = ({ children, className }: RubberBandElementProps) => {
  const [play, setPlay] = useState(false);

  return (
    <div className={className}>
      <SlAnimation
        name="rubberBand"
        duration={1000}
        iterations={1}
        play={play}
        onSlFinish={() => setPlay(false)} // onSlFinish typed correctly
      >
        <div onClick={() => setPlay(true)}>
          {children}
        </div>
      </SlAnimation>
    </div>
  );
};
