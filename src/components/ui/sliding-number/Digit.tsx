import { useEffect } from 'react';
import { motionValue, useSpring } from 'motion/react';
import { Number } from './Number';
import { TRANSITION } from './constants';

type DigitProps = {
  value: number;
  place: number;
};

export function Digit({ value, place }: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}
