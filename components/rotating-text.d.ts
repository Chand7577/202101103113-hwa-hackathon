import React, { CSSProperties, ReactNode } from 'react';

export interface RotatingTextProps {
  texts: string[];
  effect?: 'slide' | 'flip' | 'blur' | 'scale' | 'drop';
  direction?: 'up' | 'down';
  highlight?: boolean;
  highlightColor?: string;
  rotationInterval?: number;
  blur?: number;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
  splitBy?: 'characters' | 'words' | 'lines' | string;
  loop?: boolean;
  auto?: boolean;
  pauseOnHover?: boolean;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  animatePresenceMode?: 'wait' | 'sync';
  animatePresenceInitial?: boolean;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  style?: CSSProperties;
  [key: string]: any;
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

declare const RotatingText: React.ForwardRefExoticComponent<
  RotatingTextProps & React.RefAttributes<RotatingTextRef>
>;

export default RotatingText;
