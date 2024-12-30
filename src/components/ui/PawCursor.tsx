import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

interface PawCursorProps {
  x: number;
  y: number;
  isVisible: boolean;
}

export default function PawCursor({ x, y, isVisible }: PawCursorProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: [0, 1],
        scale: [0.5, 1],
        x: x - 25, // Center the paw (50px width/2)
        y: y - 25  // Center the paw (50px height/2)
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.5
      });
    }
  }, [x, y, isVisible, controls]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50"
      animate={controls}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/img/illustrations/paw-cursor.svg"
        alt="Paw cursor"
        width={50}
        height={50}
        className="w-[50px] h-[50px]"
      />
    </motion.div>
  );
} 